"use client";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { Footer } from "@/components/footer/Footer";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { Context } from "@/context";
import { hardSkillsData } from "@/data/hardskills";

const list = [
  {
    tag: "hard-skills",
    title: "Hard Skills",
  },
];

export default function HardSkills() {
  const { setMenu } = useContext(Context);

  useEffect(() => { setMenu("hard-skills") }, [setMenu])
  
  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-full">
      <DefaultHeader icon="/hard-skills.svg" title="Hard Skills" list={list} />
      <main className="flex-1 mx-5 py-10 overflow-y-auto">
        <div className="flex flex-wrap gap-8 mx-20 items-center justify-center max-sm:mx-10 max-[480px]:mx-3">
          {hardSkillsData.map(({ id, image, title }) => (
            <div
              key={id}
              className="flex flex-col justify-between bg-light-mode-2 dark:bg-dark-mode-2 p-3 rounded-sm h-36 shadow-sm dark:shadow-md"
            >
              <Image
                src={image}
                alt=""
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <p className="text-xs uppercase font-medium w-20 text-center pt-3">
                {title}
              </p>
            </div>
          ))}
        </div>
      </main>
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
        buttonY
        titleButtonY="Contato"
        urlY="/profile"
      />
    </div>
  );
}
