import { Footer } from "@/components/footer/Footer";
import { DashboardHeader } from "@/components/header/DashboardHeader";
// import { Context } from "@/context";
// import { useContext } from "react";

export default function Dashboard() {
  // const { selected } = useContext(Context)
  
  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-full">
      <DashboardHeader />
      <div className="flex-1 grid grid-cols-[1fr,2fr"></div>
      <Footer buttonA={true} titleButtonA={"Home"} urlA="/" />
    </div>
  );
}
