"use client";
import { useState } from "react";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { Theme } from "@/components/home/Theme";
import { Profiles } from "@/components/home/Profiles";
import { Footer } from "@/components/footer/Footer";
import setting from "@/../public/settings.svg";

export default function Home() {
  const [menu, setMenu] = useState<string>("usuários");

  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-full">
      <DefaultHeader icon={setting} title="Configurações do console" />
      <div className="flex-1 grid grid-cols-[1fr,2fr] ">
        <ul className="ml-6 relative flex flex-col gap-4 pt-4 bg-light-mode-2 dark:bg-dark-mode-2">
          <li className="cursor-pointer" onClick={() => setMenu("temas")}>
            {menu === "temas" && (
              <span className="absolute w-[3px] h-8 ml-12 bg-blue dark:bg-aqua"></span>
            )}
            <p
              className={`${
                menu === "temas" && "text-blue dark:text-aqua dark:font-light"
              } font-normal pl-14 dark:font-light dark:tracking-[0.05em]`}
            >
              Temas
            </p>
          </li>
          <li className="cursor-pointer" onClick={() => setMenu("usuários")}>
            {menu === "usuários" && (
              <span className="absolute w-[3px] h-8 ml-12 bg-blue dark:bg-aqua"></span>
            )}
            <p
              className={`${
                menu === "usuários" && "text-blue dark:text-aqua"
              } font-normal pl-14 dark:font-light dark:tracking-[0.05em]`}
            >
              Usuários
            </p>
          </li>
        </ul>
        {menu === "temas" ? <Theme /> : <Profiles />}
      </div>
      <Footer
        buttonA={true}
        titleButtonA={"Sejam bem-vindos(as)"}
      />
    </div>
  );
}
