import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { allQuestions } from '../data';
import { shuffle } from '../utils/shuffle';
import { reinsertOffset, reinsertId } from '../utils/repetition';
import type { SessionState, QuestionRecord } from '../types/question';

const STORAGE_KEY = 'ams-quiz-session';

function buildInitialState(questionIds: string[]): SessionState {
  const records: Record<string, QuestionRecord> = {};
  questionIds.forEach(id => {
    records[id] = { id, wrongCount: 0, consecutiveCorrect: 0, learned: false };
  });
  return {
    queue: [...questionIds],
    records,
    stats: { correctTotal: 0, wrongTotal: 0, startedAt: Date.now() },
    activeId: questionIds[0] ?? null,
  };
}

export type QuizMode = 'home' | 'quiz' | 'review' | 'result';

export function useQuiz() {
  const questionMap = useMemo(() => {
    const m: Record<string, (typeof allQuestions)[0]> = {};
    allQuestions.forEach(q => { m[q.id] = q; });
    return m;
  }, []);

  const allIds = useMemo(() => allQuestions.map(q => q.id), []);

  const [session, setSession, clearSession] = useLocalStorage<SessionState | null>(
    STORAGE_KEY,
    null
  );

  const [mode, setMode] = useLocalStorage<QuizMode>('ams-quiz-mode', 'home');

  // ---- computed helpers ----

  const currentQuestion = session?.activeId ? questionMap[session.activeId] : null;

  const learnedCount = session
    ? Object.values(session.records).filter(r => r.learned).length
    : 0;

  const mistakeIds = session
    ? Object.values(session.records)
        .filter(r => r.wrongCount > 0)
        .map(r => r.id)
    : [];

  // ---- actions ----

  const startNewSession = useCallback(() => {
    const shuffled = shuffle([...allIds]);
    const state = buildInitialState(shuffled);
    setSession(state);
    setMode('quiz');
  }, [allIds, setSession, setMode]);

  const continueSession = useCallback(() => {
    if (!session) {
      startNewSession();
    } else {
      setMode('quiz');
    }
  }, [session, startNewSession, setMode]);

  const startReview = useCallback(() => {
    if (!session || mistakeIds.length === 0) return;
    const shuffled = shuffle([...mistakeIds]);
    // keep existing records (preserve wrongCount) but reset queue
    setSession(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        queue: shuffled,
        activeId: shuffled[0] ?? null,
      };
    });
    setMode('review');
  }, [session, mistakeIds, setSession, setMode]);

  const resetAll = useCallback(() => {
    clearSession();
    setMode('home');
  }, [clearSession, setMode]);

  const answerQuestion = useCallback((chosenIndex: number) => {
    if (!session || !session.activeId) return;

    const id = session.activeId;
    const question = questionMap[id];
    if (!question) return;

    const isCorrect = chosenIndex === question.correctIndex;

    setSession(prev => {
      if (!prev) return prev;

      const rec = { ...prev.records[id] };
      const stats = { ...prev.stats };
      let queue = [...prev.queue];

      // Remove current head from queue
      queue = queue.slice(1);

      if (isCorrect) {
        stats.correctTotal += 1;
        if (rec.wrongCount === 0) {
          // First-time correct → learned immediately
          rec.learned = true;
          rec.consecutiveCorrect += 1;
        } else {
          rec.consecutiveCorrect += 1;
          if (rec.consecutiveCorrect >= 2) {
            rec.learned = true;
          } else {
            // Still needs one more correct → reinsert at small offset
            const offset = reinsertOffset(rec.wrongCount + 10); // use small offset branch
            queue = reinsertId(queue, id, 0, offset);
          }
        }
      } else {
        stats.wrongTotal += 1;
        rec.wrongCount += 1;
        rec.consecutiveCorrect = 0;
        const offset = reinsertOffset(rec.wrongCount);
        queue = reinsertId(queue, id, 0, offset);
      }

      const records = { ...prev.records, [id]: rec };
      const nextId = queue[0] ?? null;

      return {
        ...prev,
        queue,
        records,
        stats,
        activeId: nextId,
      } satisfies SessionState;
    });
  }, [session, questionMap, setSession]);

  const goHome = useCallback(() => setMode('home'), [setMode]);

  // Detect done state (queue empty + all not-learned questions have been handled)
  const isDone = session !== null && session.queue.length === 0 && session.activeId === null;

  return {
    mode,
    session,
    currentQuestion,
    learnedCount,
    totalCount: allIds.length,
    mistakeCount: mistakeIds.length,
    isDone,
    startNewSession,
    continueSession,
    startReview,
    resetAll,
    answerQuestion,
    goHome,
  };
}
