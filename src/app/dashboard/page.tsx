import { CardContrast } from "@/components/dashboard/CardContrasts";
import { MenuDashboard } from "@/components/dashboard/MenuDashboard";
import { Footer } from "@/components/footer/Footer";
import { DesktopHeader } from "@/components/header/DesktopHeader";
import { MobileHeader } from "@/components/header/MobileHeader";

const list = [
  {
    tag: "usuários",
    title: "Home",
    url: "/",
  },
  {
    tag: "perfil",
    title: "Perfil",
    url: "/profile",
  },
  {
    tag: "projetos",
    title: "Projetos",
    url: "/projects",
  },
];

export default function Dashboard() {
  return (
    <div className="bg-light-mode-1 text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col min-h-screen">
      <DesktopHeader />
      <MobileHeader list={list} />
      <section className="flex-1 flex flex-col items-center justify-center overflow-y-auto max-sm:justify-start max-sm:py-10">
        <CardContrast />
        <MenuDashboard />
      </section>
      <Footer buttonA={true} titleButtonA={"Home"} urlA="/" />
    </div>
  );
}
