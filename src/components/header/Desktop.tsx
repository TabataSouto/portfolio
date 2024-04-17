import Image from "next/image";

interface IDefaultHeaderProps {
  icon: string;
  title: string;
}

export const DesktopHeader = ({ icon, title }: IDefaultHeaderProps) => {
  return (
    <header className=" dark:text-white max-sm:hidden">
      <div className="flex items-center gap-3">
        <Image
          src={icon}
          alt=""
          className="fill-current dark:invert"
          height={40}
          width={40}
        />
        <p className="text-2xl text-light-text font-normal dark:text-white dark:font-light dark:tracking-[0.04em]">
          {title}
        </p>
      </div>
      <hr className=" border-light-mode-1 dark:border-dark-mode-1" />
    </header>
  );
};
