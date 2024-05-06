import { useContext } from "react";
import { usePathname } from "next/navigation";
import { Context } from "@/context";
import { IMobileHeader } from "@/data/interfaces";

interface ILateralMenuProps {
  list: IMobileHeader[];
}

export const LateralMenu = ({ list }: ILateralMenuProps) => {
  const pathname = usePathname();
  const { menu, setMenu } = useContext(Context);

  return (
    <nav className="flex-1 grid overflow-y-auto max-sm:hidden">
      <ul className="ml-6 relative flex flex-col gap-4 pt-4 bg-light-mode-2 dark:bg-dark-mode-2">
        {list.map(({ title, tag }, index) => (
          <>
            <li
              key={tag + index}
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
            {pathname === "/profile" && index === 0 && (
              <hr className="border-light-mode-2 dark:border-dark-mode-2 mx-12" />
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};
