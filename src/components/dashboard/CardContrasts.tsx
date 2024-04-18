"use client";
import { dashboardData } from "@/data/dashboard";
import Image from "next/image";
import Link from "next/link";

export const CardContrast = () => {
  return (
    <nav className="bg-light-mode-1 dark:bg-dark-mode-1">
      <ul className="flex w-full justify-center max-sm:flex-wrap max-sm:py-4 max-sm:px-1">
        {dashboardData.map(({ title, image, url }) => (
          <li
            key={title}
            className="group transition-all duration-300 ease-in-out"
          >
            <p className="text-xl font-normal text-center text-transparent group-hover:text-aqua2 group-hover:dark:text-blue2 max-[900px]:text-base max-sm:text-aqua2">
              {title}
            </p>
            <div className="transition-all ease-in-out delay-500 rounded-sm p-[4px] inline-block group-hover:animate-border group-hover:bg-gradient-to-r group-hover:from-aqua group-hover:via-[#3291ef] group-hover:to-teal-400 group-hover:bg-[length:400%_400%] dark:p-[3px]">
              <div className="p-[3px] back group-hover:bg-white group-hover:dark:dark:bg-gray-800 dark:p-[5px]">
                <Link
                  href={url}
                  passHref
                  target={
                    url !== "/hard-skills" && url !== "/soft-skills"
                      ? "_blank"
                      : "_self"
                  }
                >
                  <Image
                    src={image}
                    width={700}
                    height={700}
                    alt={title}
                    className="w-56 h-56 object-cover shadow-sm shadow-gray-400 dark:shadow-black max-[900px]:w-36 max-[900px]:h-36"
                  />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
