"use client";
import { Footer } from "@/components/footer/Footer";
import { DefaultHeader } from "@/components/header/DefaultHeader";
import { DetailCard } from "@/components/projects/DetailCard";
import { SimpleCard } from "@/components/projects/SimpleCard";
import { projectsData } from "@/data/projects";
import { useState } from "react";

export default function Projects() {
  const [indexProject, setIndexProject] = useState(0);

  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-full">
      <DefaultHeader icon="/project2.svg" title="Projetos" />
      <main className="flex-1 grid grid-cols-2">
        <SimpleCard indexProject={indexProject} setIndexProject={setIndexProject} />
        <DetailCard
          key={projectsData[indexProject].id}
          infosCard={projectsData[indexProject]}
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
