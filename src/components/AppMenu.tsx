import { useState } from "react";
import { Language, t, getQuizMeta } from "@/data/i18n";
import { getHistory, clearHistory, HistoryEntry } from "@/data/history";

interface AppMenuProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

const AppMenu = ({ lang, onChangeLang }: AppMenuProps) => {
  const [open, setOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const handleOpen = () => {
    setOpen(true);
    setHistory(getHistory());
  };

  const handleClear = () => {
    clearHistory();
    setHistory([]);
    setShowConfirm(false);
  };

  if (!open) {
    return (
      <button
        onClick={handleOpen}
        className="fixed top-4 right-4 z-50 w-10 h-10 bg-quiz-card border border-quiz-border rounded-full flex items-center justify-center text-quiz-text hover:bg-quiz-card-hover transition-colors"
      >
        ☰
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 animate-fade-in" onClick={() => { setOpen(false); setShowHistory(false); setShowConfirm(false); }}>
      <div
        className="absolute right-0 top-0 h-full w-72 bg-quiz-bg border-l border-quiz-border p-5 animate-fade-in overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-quiz-text font-bold text-lg">{t(lang, "menu")}</h2>
          <button onClick={() => { setOpen(false); setShowHistory(false); }} className="text-quiz-muted text-xl hover:text-quiz-text">✕</button>
        </div>

        {/* Language */}
        <div className="mb-6">
          <p className="text-quiz-muted text-xs mb-2 uppercase tracking-wider">{t(lang, "language")}</p>
          <div className="space-y-2">
            <button
              onClick={() => onChangeLang("pt")}
              className={`w-full text-left p-3 rounded-xl border transition-all text-sm ${
                lang === "pt" ? "bg-quiz-accent/20 border-quiz-accent text-quiz-text" : "bg-quiz-card border-quiz-border text-quiz-muted hover:bg-quiz-card-hover"
              }`}
            >
              🇧🇷 {t(lang, "portuguese")}
            </button>
            <button
              onClick={() => onChangeLang("en")}
              className={`w-full text-left p-3 rounded-xl border transition-all text-sm ${
                lang === "en" ? "bg-quiz-accent/20 border-quiz-accent text-quiz-text" : "bg-quiz-card border-quiz-border text-quiz-muted hover:bg-quiz-card-hover"
              }`}
            >
              🇺🇸 {t(lang, "english")}
            </button>
          </div>
        </div>

        {/* History */}
        <div className="mb-4">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="w-full text-left p-3 rounded-xl bg-quiz-card border border-quiz-border text-quiz-text text-sm hover:bg-quiz-card-hover transition-all"
          >
            {t(lang, "history")}
          </button>
        </div>

        {showHistory && (
          <div className="mb-4 animate-fade-in">
            {history.length === 0 ? (
              <p className="text-quiz-muted text-xs text-center py-4">{t(lang, "noHistory")}</p>
            ) : (
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {history.map((entry, i) => {
                  const meta = getQuizMeta(lang, entry.quizId);
                  return (
                    <div key={i} className="bg-quiz-card border border-quiz-border rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{entry.quizEmoji}</span>
                        <span className="text-quiz-text text-xs font-medium">{meta.title}</span>
                      </div>
                      <p className="text-quiz-muted text-xs">
                        {entry.resultEmoji} {lang === "en" ? entry.resultTitle : entry.resultTitle} • {t(lang, "score")}: {entry.score}
                      </p>
                      <p className="text-quiz-muted text-[10px] mt-1">{entry.date}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {history.length > 0 && !showConfirm && (
              <button
                onClick={() => setShowConfirm(true)}
                className="w-full mt-3 p-3 rounded-xl bg-red-900/30 border border-red-800/50 text-red-400 text-sm hover:bg-red-900/50 transition-all"
              >
                {t(lang, "clearHistory")}
              </button>
            )}

            {showConfirm && (
              <div className="mt-3 bg-quiz-card border border-quiz-border rounded-xl p-3 animate-fade-in">
                <p className="text-quiz-text text-xs mb-3">{t(lang, "clearHistoryConfirm")}</p>
                <div className="flex gap-2">
                  <button onClick={handleClear} className="flex-1 p-2 rounded-lg bg-red-900/50 text-red-400 text-xs font-bold">
                    {t(lang, "yes")}
                  </button>
                  <button onClick={() => setShowConfirm(false)} className="flex-1 p-2 rounded-lg bg-quiz-card-hover text-quiz-muted text-xs">
                    {t(lang, "no")}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppMenu;
