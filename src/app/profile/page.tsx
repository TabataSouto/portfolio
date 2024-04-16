"use client";
import { Footer } from "@/components/footer/Footer";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { Contact } from "@/components/profile/Contact";
import { Experience } from "@/components/profile/Experience";
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
    tag: "experiência",
    title: "Experiência",
  },
  {
    tag: "formação",
    title: "Formação",
  }
];

export default function Profile() {
  const { menu, setMenu } = useContext(Context);

  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 dark:text-white text-lg tracking-wide flex flex-col h-full">
      <DefaultHeader icon="/user2.svg" title="Informações do usuário" />
      <nav className="flex-1 grid grid-cols-[1fr,2fr]">
        <ul className="ml-6 relative flex flex-col gap-4 pt-4 bg-light-mode-2 dark:bg-dark-mode-2">
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
            { index === 0 && <hr className="border-light-mode-2 dark:border-dark-mode-2 mx-12" /> }
            </>
          ))}
        </ul>
        {menu === "perfil" && <ProfileUser />}
        {menu === "contato" && <Contact />}
        {menu === "experiência" && <Experience />}
      </nav>
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
