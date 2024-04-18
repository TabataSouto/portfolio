"use client";
import { Footer } from "@/components/footer/Footer";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { MobileHeader } from "@/components/header/MobileHeader";
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
    tag: "formação",
    title: "Formação",
  },
];

export default function Profile() {
  const { menu, setMenu } = useContext(Context);

  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 dark:text-white text-lg tracking-wide flex flex-col min-h-screen">
      <DefaultHeader icon="/user2.svg" title="Informações do usuário" />
      <MobileHeader list={list} />
      <div className="flex-1 overflow-hidden grid grid-cols-[1fr,2fr] max-sm:flex max-sm:flex-col">
        <nav className="ml-6 relative  bg-light-mode-2 dark:bg-dark-mode-2 max-sm:hidden overflow-y-auto">
          <ul className="flex flex-col gap-4 pt-4">
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
                {index === 0 && (
                  <hr className="border-light-mode-2 dark:border-dark-mode-2 mx-12" />
                )}
              </>
            ))}
          </ul>
        </nav>
        <section className="flex-1 overflow-y-auto">
          {menu === "perfil" && <ProfileUser />}
          {menu === "contato" && <Contact />}
          {menu === "experiência" && <Experience />}
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
