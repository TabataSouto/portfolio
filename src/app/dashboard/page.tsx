import { CardContrast } from "@/components/dashboard/CardContrasts";
import { MenuDashboard } from "@/components/dashboard/MenuDashboard";
import { Footer } from "@/components/footer/Footer";
import { DashboardHeader } from "@/components/header/DashboardHeader";
// import { Context } from "@/context";
// import { useContext } from "react";

export default function Dashboard() {
  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-full">
      <DashboardHeader />
      <section className="flex-1 flex flex-col items-center justify-center">
        <CardContrast />
        <MenuDashboard />
      </section>
      <Footer buttonA={true} titleButtonA={"Home"} urlA="/" />
    </div>
  );
}
