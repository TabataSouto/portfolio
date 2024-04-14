"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Theme = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="pt-6 px-14 text-xl">
      <hr className="border-light-mode-2 dark:border-dark-mode-2 my-4" />
      <div
        className="flex items-center gap-2 px-4 w-full"
        onClick={() => setTheme("light")}
      >
        <div className="w-24 h-16 bg-white border-2 border-light-mode-2 dark:border-dark-mode-2"></div>
        <p>Branco</p>
        {theme === "light" && (
          <Image
            src="/check-blue.svg"
            width={40}
            height={40}
            alt=""
            className="ml-auto"
          />
        )}
      </div>
      <hr className="border-light-mode-2 dark:border-dark-mode-2 my-4" />
      <div
        onClick={() => setTheme("dark")}
        className="flex items-center gap-2 px-4"
      >
        <div className="w-24 h-16 bg-black border-2 border-light-mode-2 dark:border-dark-mode-2"></div>
        <p>Preto</p>
        {theme === "dark" && (
          <Image
            src="/check-aqua.svg"
            width={40}
            height={40}
            alt=""
            className="ml-auto"
          />
        )}
      </div>
      <hr className="border-light-mode-2 dark:border-dark-mode-2 my-4" />
    </div>
  );
};
