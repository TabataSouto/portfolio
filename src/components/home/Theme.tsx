"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Theme = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="pt-6 px-14 text-xl max-sm:px-8">
      <hr className="border-light-mode-2 dark:border-dark-mode-2 my-4" />
      <div
        className="flex items-center gap-2 px-4 w-full"
        onClick={() => setTheme("light")}
      >
        <div className="w-24 h-16 bg-white border-2 border-light-mode-2 dark:border-dark-mode-2 max-[400px]:w-10 max-[400px]:h-10"></div>
        <p className="max-[400px]:text-lg">Branco</p>
        {theme === "light" && (
          <Image
            src="/check-blue.svg"
            width={40}
            height={40}
            alt=""
            className="ml-auto max-[400px]:w-8"
          />
        )}
      </div>
      <hr className="border-light-mode-2 dark:border-dark-mode-2 my-4" />
      <div
        onClick={() => setTheme("dark")}
        className="flex items-center gap-2 px-4"
      >
        <div className="w-24 h-16 bg-black border-2 border-light-mode-2 dark:border-dark-mode-2 max-[400px]:w-10 max-[400px]:h-10"></div>
        <p className="max-[400px]:text-lg">Preto</p>
        {theme === "dark" && (
          <Image
            src="/check-aqua.svg"
            width={40}
            height={40}
            alt=""
            className="ml-auto max-[400px]:w-8"
          />
        )}
      </div>
      <hr className="border-light-mode-2 dark:border-dark-mode-2 my-4" />
    </div>
  );
};
