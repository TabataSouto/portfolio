"use client";
import { useContext } from "react";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { Theme } from "@/components/home/Theme";
import { Profiles } from "@/components/home/Profiles";
import { Footer } from "@/components/footer/Footer";
import setting from "@/../public/settings.svg";
import { Context } from "@/context";
import { MobileHeader } from "@/components/header/MobileHeader";

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
  const { menu } = useContext(Context);

  return (
    <div className="bg-light-mode-1 text-dark-mode-1 dark:bg-dark-mode-1 dark:text-white text-lg tracking-wide max-sm:min-h-screen max-sm:flex max-sm:flex-col max-sm:justify-between">
      <DefaultHeader icon={setting} title="Configurações do console" />
      {/* <MobileHeader list={list} /> */}
      <section>{menu === "temas" ? <Theme /> : <Profiles />}</section>
      <Footer buttonA={true} titleButtonA={"Sejam bem-vindos(as)"} />
    </div>
  );
}
