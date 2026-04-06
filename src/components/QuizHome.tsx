import { quizzes } from "@/data/quizzes";
import { Language, t, getQuizMeta } from "@/data/i18n";

interface QuizHomeProps {
  onSelectQuiz: (quizId: string) => void;
  lang: Language;
}

const QuizHome = ({ onSelectQuiz, lang }: QuizHomeProps) => {
  return (
    <div className="min-h-screen bg-quiz-bg px-4 py-8 animate-fade-in">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-quiz-text mb-2">
          {t(lang, "appTitle")}
        </h1>
        <p className="text-quiz-muted text-center mb-8 text-sm">
          {t(lang, "appSubtitle")}
        </p>

        <div className="space-y-3">
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
