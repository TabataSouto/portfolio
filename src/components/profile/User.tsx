import { differenceInYears } from "date-fns";
import Image from "next/image";

export const User = () => {
  const birthDate = new Date(1992, 11, 20);
  const currentDate = new Date();
  const age = differenceInYears(currentDate, birthDate);

  return (
    <article className="flex gap-4">
      {/* imagem */}
      <div className="relative w-52 max-[900px]:hidden">
        <Image
          src="/tabata.png"
          width={170}
          height={170}
          alt="tabata"
          className="w-40 h-40 object-cover"
        />
        <span className="absolute bottom-0 right-0 bg-white-50 dark:bg-black-50 p-[6px] rounded-full mx-3 my-3">
          <Image
            src="/edit.svg"
            width={20}
            height={20}
            alt="edit"
            className="fill-current dark:invert"
          />
        </span>
      </div>
      {/* texto */}
      <div className="w-full">
        <hr className="border-light-mode-2 dark:border-dark-mode-2 w-full" />
        <div className="flex justify-between py-3 px-4">
          <p className="text-3xl font-normal max-lg:text-2xl max-[900px]:text-xl max-[400px]:text-lg">
            Tabata Caroline Souto
          </p>
          <Image
            src="/edit.svg"
            width={20}
            height={20}
            alt="tabata"
            className="fill-current dark:invert max-[400px]:hidden"
          />
        </div>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
        <p className="text-lg font-normal py-6 px-4 dark:font-light dark:tracking-[0.05em] max-lg:text-base max-[400px]:text-sm">
          Desenvolvedora Front-End | FullStack
        </p>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
        <h2 className="text-base text-right text-light-text-2 font-normal ml-3 dark:text-dark-mode-2 pt-1 max-[400px]:text-sm">
          {`${age} anos - Casada - São Paulo, SP`}
        </h2>
      </div>
    </article>
  );
};
