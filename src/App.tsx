// no useState needed here — quiz state is in useQuiz hook
import { useQuiz } from './hooks/useQuiz';
import { HomeScreen } from './components/HomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultScreen } from './components/ResultScreen';
import { ProgressBar } from './components/ProgressBar';
import { StatsBar } from './components/StatsBar';

export default function App() {
  const {
    mode,
    session,
    currentQuestion,
    learnedCount,
    totalCount,
    mistakeCount,
    isDone,
    startNewSession,
    continueSession,
    startReview,
    resetAll,
    answerQuestion,
    goHome,
  } = useQuiz();

  const handleAnswer = (idx: number) => {
    answerQuestion(idx);
  };

  if (mode === 'home') {
    return (
      <HomeScreen
        hasSession={session !== null}
        learnedCount={learnedCount}
        totalCount={totalCount}
        mistakeCount={mistakeCount}
        onStart={startNewSession}
        onContinue={continueSession}
        onReview={startReview}
        onReset={resetAll}
      />
    );
  }

  if (isDone || !currentQuestion) {
    return (
      <ResultScreen
        correct={session?.stats.correctTotal ?? 0}
        wrong={session?.stats.wrongTotal ?? 0}
        total={totalCount}
        onHome={goHome}
        onRestart={startNewSession}
      />
    );
  }

  if (!currentQuestion) return null;

  const remaining = session ? session.queue.length : 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-2 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <button
              onClick={goHome}
              className="text-slate-400 hover:text-slate-600 text-sm transition-colors"
            >
              ← Meniu
            </button>
            <StatsBar
              correct={session?.stats.correctTotal ?? 0}
              wrong={session?.stats.wrongTotal ?? 0}
              remaining={remaining}
            />
          </div>
          <ProgressBar learned={learnedCount} total={totalCount} />
        </div>
      </header>

      {/* Question area */}
      <main className="flex-1 flex items-start justify-center px-4 py-6">
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={handleAnswer}
        />
      </main>

      {/* Footer hint */}
      <footer className="text-center text-xs text-slate-300 pb-4">
        {mode === 'review' ? '📝 Mod revizuire greșeli' : '🎯 Mod sesiune normală'}
      </footer>
    </div>
  );
}
