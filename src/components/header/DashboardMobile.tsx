"use client";
import { Context } from "@/context";
import Link from "next/link";
import { useContext, useEffect } from "react";

const list = [
  {
    tag: "usuários",
    title: "Home",
    url: "/",
  },
  {
    tag: "perfil",
    title: "Perfil",
    url: "/profile",
  },
  {
    tag: "projetos",
    title: "Projetos",
    url: "/projects",
  },
];

export const MobileHeader = () => {
  const { menu, setMenu } = useContext(Context);

  useEffect(() => {
    setMenu("")
  }, [setMenu])

  return (
    <div className="min-[640px]:hidden">
      <ul className="bg-light-mode-2 dark:bg-dark-mode-2 flex py-4 ml-0 gap-8 pl-14 max-[400px]:gap-3 max-[400px]:pl-8 max-[400px]:gap-3">
        {list.map(({ tag, title, url }, index) => (
          <Link key={index} href={url} passHref onClick={() => setMenu(tag)}>
            <li className="cursor-pointer">
              <p
                className={`${
                  menu === tag && "text-blue dark:text-aqua"
                } text-sm font-normal pl-14 dark:font-light dark:tracking-[0.05em] max-sm:px-2`}
              >
                {title}
              </p>
              {/* {menu === tag && (
                <hr className="border-blue mt-1 dark:border-aqua border-[2px] min-[640px]:hidden" />
              )} */}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
