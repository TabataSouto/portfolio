"use client";
import { useContext } from "react";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { Theme } from "@/components/home/Theme";
import { Profiles } from "@/components/home/Profiles";
import { Footer } from "@/components/footer/Footer";
import setting from "@/../public/settings.svg";
import { Context } from "@/context";
import { LateralMenu } from "@/components/menu/LateralMenu";

const list = [
  {
    tag: "usuários",
    title: "Usuários",
  },
  {
    tag: "temas",
    title: "Temas",
  },
];

export default function Home() {
  const { menu } = useContext(Context);

  return (
    <div className="bg-light-mode-1 text-dark-mode-1 dark:bg-dark-mode-1 dark:text-white text-lg tracking-wide flex flex-col justify-between min-h-screen">
      <DefaultHeader
        icon={setting}
        title="Configurações do console"
        list={list}
      />
      <div className="grid flex-1 grid-cols-[1fr,2fr] max-sm:flex max-sm:flex-col">
        <LateralMenu list={list} />
        <section>{menu === "temas" ? <Theme /> : <Profiles />}</section>
      </div>
      <Footer buttonA={true} titleButtonA={"Sejam bem-vindos(as)"} />
    </div>
  );
}
