"use client";
import { Footer } from "@/components/footer/Footer";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { MobileHeader } from "@/components/header/MobileHeader";
import { LateralMenu } from "@/components/menu/LateralMenu";
import { Contact } from "@/components/profile/Contact";
import { Experience } from "@/components/profile/Experience";
import { Formation } from "@/components/profile/Formation";
import { ProfileUser } from "@/components/profile/Profile";
import { Context } from "@/context";
import { useContext } from "react";

const list = [
  {
    tag: "perfil",
    title: "Perfil",
  },
  {
    tag: "contato",
    title: "Contato",
  },
  {
    tag: "formação",
    title: "Formação",
  },
  {
    tag: "experiência",
    title: "Experiência",
  },
];

export default function Profile() {
  const { menu } = useContext(Context);

  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 dark:text-white text-lg tracking-wide flex flex-col min-h-screen">
      <DefaultHeader icon="/user2.svg" title="Informações do usuário" />
      <MobileHeader list={list} />
      <div className="flex-1 overflow-hidden grid grid-cols-[1fr,2fr] max-sm:flex max-sm:flex-col">
        <LateralMenu list={list} />
        <section className="flex-1 overflow-y-auto mr-5">
          {menu === "perfil" && <ProfileUser />}
          {menu === "contato" && <Contact />}
          {menu === "experiência" && <Experience />}
          {menu === "formação" && <Formation />}
        </section>
      </div>
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
      />
    </div>
  );
}
