"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IFooterProps {
  buttonA?: boolean;
  buttonB?: boolean;
  buttonY?: boolean;
  buttonX?: boolean;
  titleButtonA?: string;
  titleButtonB?: string;
  titleButtonY?: string;
  titleButtonX?: string;
  urlA?: string;
  urlB?: string;
  urlY?: string;
  urlX?: string;
}

export const Footer = ({
  buttonA = false,
  titleButtonA,
  urlA,
  buttonB = false,
  titleButtonB,
  urlB,
  buttonY = false,
  titleButtonY,
  urlY,
  buttonX = false,
  titleButtonX,
  urlX,
}: IFooterProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (urlY?.length && event.key === "y") {
        router.push(urlY);
      } else if (urlB?.length && event.key === "b") {
        router.push(urlB);
      } else if (urlA?.length && event.key === "a") {
        router.push(urlA);
      } else if (urlX?.length && event.key === "x") {
        router.push(urlX);
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    //  remove o evento quando o component é desmontado
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [router, urlA, urlB, urlX, urlY]);

  return (
    <footer className="text-white text-lg dark:bg-dark-mode-1">
      <hr className="mx-6 border-light-mode-1 dark:border-dark-mode-1" />
      <div className="flex items-center justify-between px-14 py-3">
        <div className="flex flex-col items-center gap-[6px] dark:text-white">
          <div className="flex gap-[3px] items-center">
            <div className="w-[7px] h-[7px] bg-[#A6D13B]"></div>
            <div className="w-[5px] h-[5px] bg-[#848484]"></div>
            <div className="w-[5px] h-[5px] bg-[#848484]"></div>
            <div className="w-[5px] h-[5px] bg-[#848484]"></div>
          </div>
          <Image
            src={"/controller.svg"}
            width={40}
            height={40}
            alt=""
            className="fill-current dark:invert w-auto h-auto"
          />
        </div>
        <div className="flex gap-8">
          {buttonY && (
            <div className="flex gap-2 items-center">
              <Link
                href={urlY ?? ""}
                className=" bg-light-mode-4 dark:bg-white dark:text-dark-mode-1 rounded-full w-[1.375rem] h-[1.375rem] font-medium text-sm flex justify-center items-center pb-[3px]"
              >
                Y
              </Link>
              <p className="text-light-text font-normal dark:text-white dark:font-light dark:tracking-[0.05em]">
                {titleButtonY}
              </p>
            </div>
          )}
          {buttonB && (
            <div className="flex gap-2 items-center">
              <Link
                href={urlB ?? ""}
                className=" bg-light-mode-4 dark:bg-white dark:text-dark-mode-1 rounded-full w-[1.375rem] h-[1.375rem] font-medium text-sm flex justify-center items-center pb-[3px]"
              >
                B
              </Link>
              <p className="text-light-text font-normal dark:text-white dark:font-light dark:tracking-[0.05em]">
                {titleButtonB}
              </p>
            </div>
          )}
          {buttonA && (
            <div className="flex gap-2 items-center">
              <Link
                href={urlA ?? ""}
                className=" bg-light-mode-4 dark:bg-white dark:text-dark-mode-1 rounded-full w-[1.375rem] h-[1.375rem] font-medium text-sm flex justify-center items-center pb-[3px]"
              >
                A
              </Link>
              <p className="text-light-text font-normal dark:text-white dark:font-light dark:tracking-[0.05em]">
                {titleButtonA}
              </p>
            </div>
          )}
          {buttonX && (
            <div className="flex gap-2 items-center">
              <Link
                href={urlX ?? ""}
                className=" bg-light-mode-4 dark:bg-white dark:text-dark-mode-1 rounded-full w-[1.375rem] h-[1.375rem] font-medium text-sm flex justify-center items-center pb-[3px]"
              >
                X
              </Link>
              <p className="text-light-text font-normal dark:text-white dark:font-light dark:tracking-[0.05em]">
                {titleButtonX}
              </p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
