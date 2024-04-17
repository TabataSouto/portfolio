"use client";
import { useContext } from "react";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { Theme } from "@/components/home/Theme";
import { Profiles } from "@/components/home/Profiles";
import { Footer } from "@/components/footer/Footer";
import setting from "@/../public/settings.svg";
import { Context } from "@/context";

export default function Home() {
  const { menu, setMenu } = useContext(Context);

  return (
    <div className="bg-light-mode-1 text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-screen">
      <DefaultHeader icon={setting} title="Configurações do console" />
      <nav className="flex-1 grid grid-cols-[1fr,2fr] max-sm:flex max-sm:flex-col">
        <ul className="ml-6 relative flex flex-col gap-4 pt-4 bg-light-mode-2 dark:bg-dark-mode-2 max-sm:flex-row max-sm:pb-4 max-sm:ml-0 max-sm:gap-8">
          <li className="cursor-pointer max-sm:pl-14" onClick={() => setMenu("temas")}>
            {menu === "temas" && (
              <span className="absolute w-[3px] h-8 ml-12 bg-blue dark:bg-aqua max-sm:hidden"></span>
            )}
           <p
              className={`${
                menu === "usuários" && "text-blue dark:text-aqua"
              } font-normal pl-14 dark:font-light dark:tracking-[0.05em] max-sm:px-2 max-sm:text-base`}
            >
              Temas
            </p>
            {menu === "temas" && (
              <hr className="border-blue mt-1 dark:border-aqua border-[2px] min-[640px]:hidden" />
            )}
          </li>
          <li className="cursor-pointer" onClick={() => setMenu("usuários")}>
            {menu === "usuários" && (
              <span className="absolute w-[3px] h-8 ml-12 bg-blue dark:bg-aqua max-sm:hidden"></span>
            )}
            <p
              className={`${
                menu === "usuários" && "text-blue dark:text-aqua"
              } font-normal pl-14 dark:font-light dark:tracking-[0.05em] max-sm:px-2 max-sm:text-base`}
            >
              Usuários
            </p>
            {menu === "usuários" && (
              <hr className="border-blue mt-1 dark:border-aqua border-[2px] min-[640px]:hidden" />
            )}
          </li>
        </ul>
        {menu === "temas" ? <Theme /> : <Profiles />}
      </nav>
      <Footer buttonA={true} titleButtonA={"Sejam bem-vindos(as)"} />
    </div>
  );
}
