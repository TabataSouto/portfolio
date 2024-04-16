"use client";
import { Component, useState } from "react";

interface IComponent {
  tag: string;
  component: Component;
}

interface IMenu {
  title: string;
  tag: string;
}

interface ILateralMenuProps {
  list: IMenu[];
  components: IComponent[];
}

export const LateralMenu = ({ list, components }: ILateralMenuProps) => {
  const [menu, setMenu] = useState<string>("usuários");

  return (
    <div className="bg-[#EBEBEB] text-dark-mode-1 dark:bg-dark-mode-1 text dark:text-white text-lg tracking-wide flex flex-col h-full">
      <nav className="flex-1 grid grid-cols-[1fr,2fr]">
        <ul className="ml-6 relative flex flex-col gap-4 pt-4 bg-light-mode-2 dark:bg-dark-mode-2">
          {list.map(({ title, tag }, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => setMenu(tag)}
            >
              {menu === tag && (
                <span className="absolute w-[3px] h-8 ml-12 bg-blue dark:bg-aqua"></span>
              )}
              <p
                className={`${
                  menu === tag && "text-blue dark:text-aqua dark:font-light"
                } font-normal pl-14 dark:font-light dark:tracking-[0.05em]`}
              >
                {title}
              </p>
            </li>
          ))}
        </ul>
        {/* {menu === "temas" ? <Theme /> : <Profiles />} */}
      </nav>
    </div>
  );
};
