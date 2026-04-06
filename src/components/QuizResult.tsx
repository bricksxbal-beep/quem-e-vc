import { useState, useMemo } from "react";
import { Quiz } from "@/data/quizzes";

interface QuizResultProps {
  quiz: Quiz;
  score: number;
  onRetry: () => void;
  onHome: () => void;
  onShowReward: () => void;
}

const QuizResult = ({ quiz, score, onRetry, onHome, onShowReward }: QuizResultProps) => {
  const [showDetailed, setShowDetailed] = useState(false);

  const result = useMemo(() => {
    const sorted = [...quiz.results].sort((a, b) => b.minScore - a.minScore);
    return sorted.find((r) => score >= r.minScore) || sorted[sorted.length - 1];
  }, [quiz, score]);

  const fakePercent = useMemo(() => Math.floor(Math.random() * 10 + 8), []);

  return (
    <div className="min-h-screen bg-quiz-bg px-4 py-8 animate-fade-in">
      <div className="max-w-md mx-auto text-center">
        <p className="text-quiz-muted text-sm mb-4">{quiz.emoji} {quiz.title}</p>

        <div className="animate-scale-in">
          <span className="text-7xl block mb-4">{result.emoji}</span>
          <h2 className="text-2xl font-bold text-quiz-text mb-3">{result.title}</h2>
          <p className="text-quiz-muted mb-6 leading-relaxed">{result.description}</p>
        </div>

        <div className="bg-quiz-card border border-quiz-border rounded-2xl p-4 mb-4">
          <p className="text-quiz-accent text-sm font-semibold">
            Apenas {fakePercent}% das pessoas têm esse resultado 😳
          </p>
        </div>

        {showDetailed ? (
          <div className="bg-quiz-card border border-quiz-accent/30 rounded-2xl p-5 mb-6 animate-fade-in text-left">
            <p className="text-quiz-accent text-xs font-bold mb-2">🔓 RESULTADO COMPLETO</p>
            <p className="text-quiz-text text-sm leading-relaxed">{result.detailedDescription}</p>
          </div>
        ) : (
          <button
            onClick={() => {
              onShowReward();
              setShowDetailed(true);
            }}
            className="w-full bg-gradient-to-r from-quiz-accent to-quiz-accent2 text-quiz-bg font-bold rounded-2xl p-4 mb-6 transition-all duration-200 hover-scale"
          >
            🔍 Ver resultado completo
          </button>
        )}

        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full bg-quiz-card border border-quiz-border text-quiz-text rounded-2xl p-4 font-medium hover:bg-quiz-card-hover transition-all"
          >
            🔄 Refazer teste
          </button>
          <button
            onClick={onHome}
            className="w-full bg-quiz-card border border-quiz-border text-quiz-text rounded-2xl p-4 font-medium hover:bg-quiz-card-hover transition-all"
          >
            🏠 Escolher outro teste
          </button>
        </div>

        <p className="text-quiz-muted text-xs mt-6">
          Poucas pessoas têm coragem de ver o resultado completo 🔥
        </p>
      </div>
    </div>
  );
};

export default QuizResult;
