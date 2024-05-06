"use client";
import { Footer } from "@/components/footer/Footer";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { ButtonChangeImage } from "@/components/projects/ButtonChangeImage";
import { DetailCard } from "@/components/projects/DetailCard";
import { SimpleCard } from "@/components/projects/SimpleCard";
import { Context } from "@/context";
import { projectsData } from "@/data/projects";
import { useContext, useEffect, useState } from "react";

const list = [
  {
    tag: "projetos",
    title: "Projetos",
  },
];

export default function Projects() {
  const { setMenu } = useContext(Context);
  const [indexProject, setIndexProject] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setMenu("projetos");
  }, [setMenu]);

  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-full">
      <DefaultHeader icon="/project2.svg" title="Projetos" list={list} />
      <main className="flex-1 grid grid-cols-2 overflow-hidden max-sm:flex max-sm:justify-center">
        <SimpleCard
          indexProject={indexProject}
          setIndexProject={setIndexProject}
        />
        <DetailCard
          infosCard={projectsData[indexProject]}
          opacity={opacity}
          indexProject={indexProject}
          setIndexProject={setIndexProject}
          setOpacity={setOpacity}
        />
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
