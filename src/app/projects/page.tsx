import { Footer } from "@/components/footer/Footer";
import { DefaultHeader } from "@/components/header/DefaultHeader";

export default function Projects() {
  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-full">
      <DefaultHeader icon="/user2.svg" title="Informações do usuário" />
      <main className="flex-1 grid grid-cols-[1fr,2fr]"></main>
      <Footer
        buttonA
        titleButtonA="Voltar"
        urlA="/dashboard"
        buttonB
        titleButtonB="Home"
        urlB="/"
        buttonX
        titleButtonX="Projetos"
        urlX="/projects"
        buttonY
        titleButtonY="Contato"
        urlY="/contact"
      />
    </div>
  );
}
