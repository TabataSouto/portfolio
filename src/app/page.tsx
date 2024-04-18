"use client";
import { useContext } from "react";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { Theme } from "@/components/home/Theme";
import { Profiles } from "@/components/home/Profiles";
import { Footer } from "@/components/footer/Footer";
import setting from "@/../public/settings.svg";
import { Context } from "@/context";
import { MobileHeader } from "@/components/header/MobileHeader";
import { profiles } from "@/data/profiles";
import Image from "next/image";

const list = [
  {
    tag: "usuários",
    title: "Usuários",
    url: "/",
  },
  {
    tag: "temas",
    title: "Temas",
    // url: "/"
  },
];

export default function Home() {
  const { menu, setMenu } = useContext(Context);

  return (
    <div className="bg-light-mode-1 text-dark-mode-1 dark:bg-dark-mode-1 dark:text-white text-lg tracking-wide flex flex-col justify-between min-h-screen">
      <DefaultHeader icon={setting} title="Configurações do console" />
      <MobileHeader list={list} />
      <nav className="flex-1 grid grid-cols-[1fr,2fr] max-sm:flex max-sm:flex-col overflow-y-auto">
        <ul className="ml-6 relative flex flex-col gap-4 pt-4 bg-light-mode-2 dark:bg-dark-mode-2 max-sm:hidden">
          {list.map(({ title, tag }, index) => (
            <>
              <li
                key={index}
                className="cursor-pointer"
                onClick={() => setMenu(tag)}
              >
                {menu === tag && (
                  <span className="absolute w-[3px] h-8 ml-12 bg-blue dark:bg-aqua"></span>
                )}
                <p
                  className={`${
                    menu === tag && "text-blue dark:text-aqua dark:font-light"
                  } font-normal pl-14 dark:font-light dark:tracking-[0.05em]`}
                >
                  {title}
                </p>
              </li>
            </>
          ))}
        </ul>
        {menu === "temas" ? <Theme /> : <Profiles />}
      </nav>
      <Footer buttonA={true} titleButtonA={"Sejam bem-vindos(as)"} />
    </div>
  );
}
