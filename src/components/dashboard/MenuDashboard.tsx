"use client";
import Image from "next/image";

export const MenuDashboard = () => {
  return (
    <div>
      <ul className="flex pt-6 gap-4 text-transparent">
        <li className="group flex flex-col items-center w-16">
          <div className="transition-all ease-in-out delay-500 rounded-full p-[4px] inline-block group-hover:animate-border group-hover:bg-gradient-to-r group-hover:from-aqua group-hover:via-[#3291ef] group-hover:to-teal-400 group-hover:bg-[length:400%_400%] dark:p-[3px]">
            <div className="bg-red-menu w-16 h-16 rounded-full flex justify-center">
              <Image src="/user.svg" width={30} height={30} alt="usuário" />
            </div>
          </div>
          <p className="text-lg font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2 dark:group-hover:text-blue2 dark:font-light dark:pt-[1px]">
            Usuário
          </p>
        </li>
        <li className="group flex flex-col items-center w-16">
          <div className="transition-all ease-in-out delay-500 rounded-full p-[4px] inline-block group-hover:animate-border group-hover:bg-gradient-to-r group-hover:from-aqua group-hover:via-[#3291ef] group-hover:to-teal-400 group-hover:bg-[length:400%_400%] dark:p-[3px]">
            <div className="bg-white dark:bg-dark-mode-3 w-16 h-16 rounded-full flex justify-center">
              <Image src="/message.svg" width={30} height={30} alt="contato" />
            </div>
          </div>
          <p className="text-lg font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2 dark:group-hover:text-blue2 dark:font-light dark:pt-[1px]">
            Contato
          </p>
        </li>
        <li className="group flex flex-col items-center w-16">
          <div className="transition-all ease-in-out delay-500 rounded-full p-[4px] inline-block group-hover:animate-border group-hover:bg-gradient-to-r group-hover:from-aqua group-hover:via-[#3291ef] group-hover:to-teal-400 group-hover:bg-[length:400%_400%] dark:p-[3px]">
            <div className="bg-white dark:bg-dark-mode-3  w-16 h-16 rounded-full flex justify-center">
              <Image src="/project.svg" width={32} height={32} alt="projetos" />
            </div>
          </div>
          <p className="text-lg font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2 dark:group-hover:text-blue2 dark:font-light dark:pt-[1px]">
            Projetos
          </p>
        </li>
        <li className="group flex flex-col items-center w-16">
          <div className="transition-all ease-in-out delay-500 rounded-full p-[4px] inline-block group-hover:animate-border group-hover:bg-gradient-to-r group-hover:from-aqua group-hover:via-[#3291ef] group-hover:to-teal-400 group-hover:bg-[length:400%_400%] dark:p-[3px]">
            <div className="bg-white dark:bg-dark-mode-3  w-16 h-16 rounded-full flex justify-center">
              <Image
                src="/hardskills.svg"
                width={30}
                height={30}
                alt="hard skills"
              />
            </div>
          </div>
          <p className="text-lg font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2 w-24 dark:group-hover:text-blue2 dark:font-light dark:pt-[1px]">
            Hard Skills
          </p>
        </li>
        <li className="group flex flex-col items-center w-16">
          <div className="transition-all ease-in-out delay-500 rounded-full p-[4px] inline-block group-hover:animate-border group-hover:bg-gradient-to-r group-hover:from-aqua group-hover:via-[#3291ef] group-hover:to-teal-400 group-hover:bg-[length:400%_400%] dark:p-[3px]">
            <div className="bg-white dark:bg-dark-mode-3  w-16 h-16 rounded-full flex justify-center">
              <Image
                src="/softskills.svg"
                width={35}
                height={35}
                alt="soft skills"
                className="fill-current dark:invert"
              />
            </div>
          </div>
          <p className="text-lg font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2 w-24 dark:group-hover:text-blue2 dark:font-light dark:pt-[1px]">
            Soft Skills
          </p>
        </li>
        <li className="group flex flex-col items-center w-16">
          <div className="transition-all ease-in-out delay-500 rounded-full p-[4px] inline-block group-hover:animate-border group-hover:bg-gradient-to-r group-hover:from-aqua group-hover:via-[#3291ef] group-hover:to-teal-400 group-hover:bg-[length:400%_400%] dark:p-[3px]">
            <div className="bg-white dark:bg-dark-mode-3  w-16 h-16 rounded-full flex justify-center">
              <Image
                src="/experience.svg"
                width={26}
                height={26}
                alt="soft skills"
                className="fill-current dark:invert"
              />
            </div>
          </div>
          <p className="text-lg font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2 w-24 dark:group-hover:text-blue2 dark:font-light dark:pt-[1px]">
            Experiência
          </p>
        </li>
      </ul>
    </div>
  );
};
