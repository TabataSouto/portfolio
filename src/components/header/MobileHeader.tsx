"use client";
import { Context } from "@/context";
import Link from "next/link";
import { useContext } from "react";

interface IMobileHeaderProps {
  list: {
    tag: string;
    title: string;
    url?: string;
  }[];
}

export const MobileHeader = ({ list }: IMobileHeaderProps) => {
  const { menu, setMenu } = useContext(Context);

  return (
    <nav className="min-[640px]:hidden">
      <ul className="bg-light-mode-2 dark:bg-dark-mode-2 flex py-4 ml-0 gap-8 pl-14 max-[500px]:gap-3 max-[500px]:pl-8 max-[380px]:px-4">
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
                } text-base font-normal pl-14 dark:font-light dark:tracking-[0.05em] max-sm:px-2`}
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
