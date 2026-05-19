import { useState, useEffect } from 'react';
import type { Question, Difficulty } from '../types/question';
import { AnswerFeedback } from './AnswerFeedback';

interface Props {
  question: Question;
  onAnswer: (index: number) => void;
}

const difficultyLabel: Record<Difficulty, { label: string; cls: string }> = {
  easy: { label: 'Ușor', cls: 'bg-emerald-100 text-emerald-700' },
  medium: { label: 'Mediu', cls: 'bg-amber-100 text-amber-700' },
  hard: { label: 'Greu', cls: 'bg-rose-100 text-rose-700' },
  trap: { label: '⚠ Capcană', cls: 'bg-purple-100 text-purple-700' },
};

export function QuestionCard({ question, onAnswer }: Props) {
  const [chosen, setChosen] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setChosen(null);
    setAnswered(false);
  }, [question.id]);

  const handleChoice = (idx: number) => {
    if (answered) return;
    setChosen(idx);
    setAnswered(true);

    const correct = idx === question.correctIndex;
    if (correct) {
      // Auto-advance after 800ms on correct answer
      setTimeout(() => onAnswer(idx), 800);
    }
    // Wrong: wait for user to click "Următoarea"
  };

  const handleNext = () => {
    if (chosen !== null) onAnswer(chosen);
  };

  const isCorrect = chosen === question.correctIndex;
  const diff = difficultyLabel[question.difficulty];

  const optionClass = (idx: number) => {
    if (!answered) {
      return 'bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer';
    }
    if (idx === question.correctIndex) {
      return 'bg-emerald-50 border-emerald-400 text-emerald-800 font-medium';
    }
    if (idx === chosen && chosen !== question.correctIndex) {
      return 'bg-rose-50 border-rose-400 text-rose-800';
    }
    return 'bg-white border-slate-200 text-slate-400 cursor-default';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header chips */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${diff.cls}`}>
          {diff.label}
        </span>
        <span className="text-xs bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full capitalize">
          {question.topic.replace('-', ' ')}
        </span>
      </div>

      {/* Question */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-4">
        <p className="text-slate-800 font-medium leading-relaxed text-base">
          {question.prompt}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleChoice(idx)}
            disabled={answered}
            className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-150 text-sm leading-snug
              ${optionClass(idx)}`}
          >
            <span className="font-semibold text-slate-400 mr-2">
              {String.fromCharCode(65 + idx)}.
            </span>
            {opt}
          </button>
        ))}
      </div>

      {/* Feedback (only on wrong answer) */}
      {answered && !isCorrect && (
        <AnswerFeedback explanation={question.explanation} onNext={handleNext} />
      )}

      {/* Subtle success indicator on correct (before auto-advance) */}
      {answered && isCorrect && (
        <div className="mt-3 text-center text-emerald-600 text-sm font-medium animate-pulse">
          ✓ Corect!
        </div>
      )}
    </div>
  );
}
