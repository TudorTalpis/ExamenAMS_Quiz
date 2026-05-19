interface Props {
  hasSession: boolean;
  learnedCount: number;
  totalCount: number;
  mistakeCount: number;
  onStart: () => void;
  onContinue: () => void;
  onReview: () => void;
  onReset: () => void;
}

export function HomeScreen({
  hasSession,
  learnedCount,
  totalCount,
  mistakeCount,
  onStart,
  onContinue,
  onReview,
  onReset,
}: Props) {
  const pct = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;

  const handleReset = () => {
    if (window.confirm('Ești sigur? Progresul sesiunii actuale va fi șters.')) {
      onReset();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">📐</div>
          <h1 className="text-3xl font-bold text-slate-800">AMS Quiz</h1>
          <p className="text-slate-500 mt-1">Pregătire examen UML</p>
        </div>

        {/* Stats card (if session exists) */}
        {hasSession && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-4">
            <p className="text-sm text-slate-500 mb-2">Sesiunea curentă</p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-700 font-medium">
                {learnedCount} / {totalCount} învățate
              </span>
              <span className="text-indigo-600 font-bold">{pct}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${pct}%` }}
              />
            </div>
            {mistakeCount > 0 && (
              <p className="text-xs text-rose-500 mt-2">
                {mistakeCount} întrebări cu greșeli
              </p>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          {hasSession ? (
            <button
              onClick={onContinue}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold
                hover:bg-indigo-700 active:scale-95 transition-all duration-150 shadow-sm"
            >
              ▶ Continuă sesiunea
            </button>
          ) : (
            <button
              onClick={onStart}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold
                hover:bg-indigo-700 active:scale-95 transition-all duration-150 shadow-sm"
            >
              🚀 Începe sesiunea
            </button>
          )}

          {hasSession && (
            <button
              onClick={onStart}
              className="w-full py-3 rounded-xl bg-white border-2 border-slate-200 text-slate-700
                font-medium hover:border-indigo-300 hover:bg-indigo-50 active:scale-95 transition-all duration-150"
            >
              🔄 Sesiune nouă (shuffle)
            </button>
          )}

          {mistakeCount > 0 && (
            <button
              onClick={onReview}
              className="w-full py-3 rounded-xl bg-rose-50 border-2 border-rose-200 text-rose-700
                font-medium hover:bg-rose-100 active:scale-95 transition-all duration-150"
            >
              📝 Revizuiește greșelile ({mistakeCount})
            </button>
          )}

          {hasSession && (
            <button
              onClick={handleReset}
              className="w-full py-2.5 rounded-xl text-slate-400 text-sm
                hover:text-rose-500 transition-colors duration-150"
            >
              ✕ Reset complet
            </button>
          )}
        </div>

        {/* Info */}
        <p className="text-center text-xs text-slate-400 mt-6">
          {totalCount} întrebări • Spaced repetition • Salvat automat
        </p>
      </div>
    </div>
  );
}
