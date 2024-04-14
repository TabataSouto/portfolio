import { Footer } from "@/components/footer/Footer";
import { DefaultHeader } from "@/components/header/DefaultHeader"

export default function Dashboard() {
  return (
    <div className="text-light-text dark:text-dark-mode-1">
      <DefaultHeader  icon="/settings.svg" title="Destaques" />
      <h1 className="text-2xl text-light-mode-1 dark:text-white">Dashboard aqui</h1>
      <Footer buttonA={true} titleButtonA="Home" urlA="/" />
    </div>
  );
};
