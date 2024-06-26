"use client";
import { Footer } from "@/components/footer/Footer";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { Context } from "@/context";
import { softSkillsData } from "@/data/softskills";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const list = [
  {
    tag: "soft-skills",
    title: "Soft Skills",
  },
];

export default function SoftSkills() {
  const { setMenu } = useContext(Context);
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setMenu("soft-skills");
  }, [setMenu]);

  const handleChangeImage = (type: string) => {
    setOpacity(0);

    let newIndex: number;
    if (type === "next") {
      newIndex = index + 1;
    } else {
      newIndex = index - 1;
    }

    setTimeout(() => {
      setOpacity(1);
      setIndex(newIndex);
    }, 400);
  };

  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-full">
      <DefaultHeader icon="/softskills.svg" title="Soft Skills" list={list} />
      <main className="flex-1 overflow-hidden flex items-center justify-center">
        <div className="flex gap-8 overflow-x-auto mx-5 pb-5">
          {softSkillsData.map(({ id, image, title }) => (
            <Image
              key={id}
              src={image}
              alt={title}
              // style={{
              //   opacity: opacity,
              //   transition: "opacity 0.5s ease-in-out",
              // }}
              width={600}
              height={600}
              className="w-80 h-80 object-cover max-[1050px]:w-60 max-[1050px]:h-60 max-[900px]:w-52 max-[900px]:h-52"
            />
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
