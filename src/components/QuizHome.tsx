import { quizzes } from "@/data/quizzes";
import { Language, t, getQuizMeta } from "@/data/i18n";

interface QuizHomeProps {
  onSelectQuiz: (quizId: string) => void;
  lang: Language;
}

const QuizHome = ({ onSelectQuiz, lang }: QuizHomeProps) => {
  const benefits = [t(lang, "benefit1"), t(lang, "benefit2"), t(lang, "benefit3"), t(lang, "benefit4")];

  return (
    <div className="min-h-screen bg-quiz-bg px-4 py-6 animate-fade-in">
      <div className="max-w-md mx-auto">

        {/* Área de boas-vindas */}
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-quiz-border rounded-2xl p-6 mb-6 text-center animate-fade-in">
          <h1 className="text-2xl font-bold text-quiz-text mb-2">
            {t(lang, "welcomeTitle")}
          </h1>
          <p className="text-quiz-muted text-sm mb-4">
            {t(lang, "welcomeCta")}
          </p>

          <div className="grid grid-cols-2 gap-2 mb-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-quiz-card/70 rounded-xl px-3 py-2 text-xs text-quiz-text font-medium border border-quiz-border/50"
              >
                {b}
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              const firstQuiz = document.getElementById("quiz-list");
              firstQuiz?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl py-3 text-sm hover:opacity-90 transition-opacity"
          >
            {t(lang, "startNow")}
          </button>
        </div>

        <h2 className="text-lg font-bold text-quiz-text mb-3 text-center">
          {t(lang, "appTitle")}
        </h2>

        <div id="quiz-list" className="space-y-3">
          {quizzes.map((quiz, index) => {
            const meta = getQuizMeta(lang, quiz.id);
            return (
              <button
                key={quiz.id}
                onClick={() => onSelectQuiz(quiz.id)}
                className="w-full bg-quiz-card hover:bg-quiz-card-hover border border-quiz-border rounded-2xl p-5 text-left transition-all duration-200 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{quiz.emoji}</span>
                  <div>
                    <h2 className="text-lg font-semibold text-quiz-text">{meta.title}</h2>
                    <p className="text-sm text-quiz-muted">{meta.description}</p>
                  </div>
                  <span className="ml-auto text-quiz-muted text-xl">›</span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default QuizHome;
