"use client";
import { dashboatdMenu } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

export const MenuDashboard = () => {
  return (
    <div>
      <ul className="flex pt-6 gap-4 text-transparent">
        {dashboatdMenu.map(({ title, icon, classImg, url }) => (
          <Link href={url} passHref key={title + url}>
            <li className="group flex flex-col items-center w-16">
              <div className="transition-all ease-in-out delay-500 rounded-full p-[4px] inline-block group-hover:animate-border group-hover:bg-gradient-to-r group-hover:from-aqua group-hover:via-[#3291ef] group-hover:to-teal-400 group-hover:bg-[length:400%_400%] dark:p-[3px]">
                <div
                  className={`${
                    title === "Usuário"
                      ? "bg-red-menu dark:bg-red-menu"
                      : "bg-white"
                  } dark:bg-dark-mode-3 w-16 h-16 rounded-full flex justify-center`}
                >
                  <Image
                    src={icon}
                    width={30}
                    height={30}
                    alt={title}
                    className={classImg}
                  />
                </div>
              </div>
              <p className="w-24 text-lg font-normal transition ease-in-out delay-150 text-center group-hover:text-aqua2 dark:group-hover:text-blue2 dark:font-light dark:pt-[1px]">
                {title}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
