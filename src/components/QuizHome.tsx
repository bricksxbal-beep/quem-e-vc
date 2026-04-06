import { quizzes } from "@/data/quizzes";

interface QuizHomeProps {
  onSelectQuiz: (quizId: string) => void;
}

const QuizHome = ({ onSelectQuiz }: QuizHomeProps) => {
  return (
    <div className="min-h-screen bg-quiz-bg px-4 py-8 animate-fade-in">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-quiz-text mb-2">
          Quem é você de verdade? 🔮
        </h1>
        <p className="text-quiz-muted text-center mb-8 text-sm">
          Descubra verdades sobre você que ninguém conta
        </p>

        <div className="space-y-3">
          {quizzes.map((quiz, index) => (
            <button
              key={quiz.id}
              onClick={() => onSelectQuiz(quiz.id)}
              className="w-full bg-quiz-card hover:bg-quiz-card-hover border border-quiz-border rounded-2xl p-5 text-left transition-all duration-200 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{quiz.emoji}</span>
                <div>
                  <h2 className="text-lg font-semibold text-quiz-text">
                    {quiz.title}
                  </h2>
                  <p className="text-sm text-quiz-muted">{quiz.description}</p>
                </div>
                <span className="ml-auto text-quiz-muted text-xl">›</span>
              </div>
            </button>
          ))}
        </div>

        <p className="text-quiz-muted text-center mt-8 text-xs">
          +2 milhões de testes realizados 🚀
        </p>
      </div>
    </div>
  );
};

export default QuizHome;
