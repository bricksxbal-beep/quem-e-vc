import { Language, t } from "@/data/i18n";

interface WelcomeScreenProps {
  onStart: () => void;
  lang: Language;
}

const WelcomeScreen = ({ onStart, lang }: WelcomeScreenProps) => {
  const benefits = [t(lang, "benefit1"), t(lang, "benefit2"), t(lang, "benefit3"), t(lang, "benefit4")];

  return (
    <div className="min-h-screen bg-quiz-bg flex items-center justify-center px-4 py-8 animate-fade-in">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-quiz-border rounded-3xl p-8 text-center">
          <div className="text-6xl mb-4">🔮</div>
          <h1 className="text-3xl font-bold text-quiz-text mb-3">
            {t(lang, "welcomeTitle")}
          </h1>
          <p className="text-quiz-muted text-base mb-6">
            {t(lang, "welcomeCta")}
          </p>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-quiz-card/70 rounded-xl px-3 py-3 text-sm text-quiz-text font-medium border border-quiz-border/50 animate-fade-in"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
              >
                {b}
              </div>
            ))}
          </div>

          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl py-4 text-base hover:opacity-90 transition-opacity hover-scale"
          >
            {t(lang, "startNow")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
