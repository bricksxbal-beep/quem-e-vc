import { useState, useMemo } from "react";
import { Quiz } from "@/data/quizzes";
import { Language, t } from "@/data/i18n";

interface QuizResultProps {
  quiz: Quiz;
  score: number;
  onRetry: () => void;
  onHome: () => void;
  onShowReward: () => void;
  lang: Language;
}

const QuizResult = ({ quiz, score, onRetry, onHome, onShowReward, lang }: QuizResultProps) => {
  const [showDetailed, setShowDetailed] = useState(false);

  const result = useMemo(() => {
    const sorted = [...quiz.results].sort((a, b) => b.minScore - a.minScore);
    return sorted.find((r) => score >= r.minScore) || sorted[sorted.length - 1];
  }, [quiz, score]);

  const fakePercent = useMemo(() => Math.floor(Math.random() * 10 + 8), []);

  const title = lang === "en" ? result.titleEn : result.title;
  const desc = lang === "en" ? result.descriptionEn : result.description;
  const detailed = lang === "en" ? result.detailedDescriptionEn : result.detailedDescription;

  return (
    <div className="min-h-screen bg-quiz-bg px-4 py-8 animate-fade-in">
      <div className="max-w-md mx-auto text-center">
        <p className="text-quiz-muted text-sm mb-4">{quiz.emoji} {lang === "en" ? result.titleEn.split(" ")[0] : quiz.title}</p>

        <div className="animate-scale-in">
          <span className="text-7xl block mb-4">{result.emoji}</span>
          <h2 className="text-2xl font-bold text-quiz-text mb-3">{title}</h2>
          <p className="text-quiz-muted mb-6 leading-relaxed">{desc}</p>
        </div>

        <div className="bg-quiz-card border border-quiz-border rounded-2xl p-4 mb-4">
          <p className="text-quiz-accent text-sm font-semibold">
            {t(lang, "onlyPercent", { n: fakePercent })}
          </p>
        </div>

        {showDetailed ? (
          <div className="bg-quiz-card border border-quiz-accent/30 rounded-2xl p-5 mb-6 animate-fade-in text-left">
            <p className="text-quiz-accent text-xs font-bold mb-2">{t(lang, "fullResult")}</p>
            <p className="text-quiz-text text-sm leading-relaxed">{detailed}</p>
          </div>
        ) : (
          <button
            onClick={() => {
              onShowReward();
              setShowDetailed(true);
            }}
            className="w-full bg-gradient-to-r from-quiz-accent to-quiz-accent2 text-quiz-bg font-bold rounded-2xl p-4 mb-6 transition-all duration-200 hover-scale"
          >
            {t(lang, "seeFullResult")}
          </button>
        )}

        <div className="space-y-3">
          <button onClick={onRetry} className="w-full bg-quiz-card border border-quiz-border text-quiz-text rounded-2xl p-4 font-medium hover:bg-quiz-card-hover transition-all">
            {t(lang, "retryTest")}
          </button>
          <button onClick={onHome} className="w-full bg-quiz-card border border-quiz-border text-quiz-text rounded-2xl p-4 font-medium hover:bg-quiz-card-hover transition-all">
            {t(lang, "chooseAnother")}
          </button>
        </div>

        <p className="text-quiz-muted text-xs mt-6">
          {t(lang, "fewPeopleDare")}
        </p>
      </div>
    </div>
  );
};

export default QuizResult;
