"use client";
import { useContext } from "react";
import Link from "next/link";
import { Context } from "@/context";
import { IMobileHeader } from "@/data/interfaces";

interface IMobileHeaderProps {
  list: IMobileHeader[];
}

export const MobileHeader = ({ list }: IMobileHeaderProps) => {
  const { menu, setMenu } = useContext(Context);

  return (
    <nav className="min-[640px]:hidden">
      <ul className="bg-light-mode-2 dark:bg-dark-mode-2 flex py-4 ml-0 gap-8 pl-14 max-[500px]:gap-3 max-[500px]:pl-8 max-[380px]:px-2">
        {list?.map(({ tag, title, url }, index) => (
          <Link
            key={index}
            href={url ?? ""}
            passHref
            onClick={() => setMenu(tag)}
          >
            <li className="cursor-pointer">
              <p
                className={`${
                  menu === tag && "text-blue dark:text-aqua"
                } text-base font-normal pl-14 dark:font-light dark:tracking-[0.05em] max-sm:px-2 max-[440px]:text-sm max-[440px]:px-1`}
              >
                {title}
              </p>
              {menu === tag && (
                <hr className="border-blue mt-1 dark:border-aqua border-[2px] min-[640px]:hidden" />
              )}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
