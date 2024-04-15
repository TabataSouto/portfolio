"use client";
import Image from "next/image";
import { useState } from "react";

export const MenuDashboard = () => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <ul className="flex pt-6 gap-4 text-transparent">
        <li className="group flex flex-col items-center gap-2">
          <div className="bg-red-menu w-14 h-14 rounded-full flex justify-center">
            <Image src="/user.svg" width={30} height={30} alt="usuário" />
          </div>
          <p className="text-base font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2">
            Usuário
          </p>
        </li>
        <li className="group flex flex-col items-center gap-2 w-14">
          <div className="bg-white dark:bg-dark-mode-3 w-14 h-14 rounded-full flex justify-center">
            <Image
              src="/message.svg"
              width={30}
              height={30}
              alt="contato"
              className="fill-current dark:invert"
            />
          </div>
          <p className="text-base font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2">
            Contato
          </p>
        </li>
        <li className="group flex flex-col items-center gap-2 w-14">
          <div className="bg-white dark:bg-dark-mode-3  w-14 h-14 rounded-full flex justify-center">
            <Image src="/project.svg" width={30} height={30} alt="projetos" />
          </div>
          <p className="text-base font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2">
            Projetos
          </p>
        </li>
        <li className="group flex flex-col items-center gap-2 w-14">
          <div className="bg-white dark:bg-dark-mode-3  w-14 h-14 rounded-full flex justify-center">
            <Image
              src="/hardskills.svg"
              width={30}
              height={30}
              alt="hard skills"
            />
          </div>
          <p className="text-base font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2 w-24">
            Hard Skills
          </p>
        </li>
        <li className="group flex flex-col items-center gap-2 w-14">
          <div className="bg-white dark:bg-dark-mode-3  w-14 h-14 rounded-full flex justify-center">
            <Image src="/user.svg" width={30} height={30} alt="soft skills" />
          </div>
          <p className="text-base font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2 w-24">
            Soft Skills
          </p>
        </li>
      </ul>
    </div>
  );
};
