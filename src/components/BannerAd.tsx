import { Language, t } from "@/data/i18n";

const BannerAd = ({ lang }: { lang: Language }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-quiz-card border-t border-quiz-border">
      <div className="max-w-md mx-auto h-14 flex items-center justify-center">
        <span className="text-quiz-muted text-xs">{t(lang, "bannerText")}</span>
      </div>
    </div>
  );
};

export default BannerAd;
