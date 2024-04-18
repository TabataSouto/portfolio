import Link from "next/link";

export const Contact = () => {
  return (
    <main className="flex flex-col gap-8 py-10 pl-12 pr-16 max-sm:px-10 max-[400px]:px-6">
      <article className="flex flex-col">
        <div className="flex items-center pb-1">
          <span className="w-[5px] h-4 bg-light-mode-5 dark:bg-dark-mode-4"></span>
          <h2 className="text-base text-light-text-2 font-normal ml-3  dark:text-dark-mode-2">
            E-mail
          </h2>
        </div>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
        <p className="text-xl font-normal p-3 max-[900px]:text-lg max-[400px]:text-base">tabatac.souto@gmail.com</p>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
      </article>
      <article className="flex flex-col">
        <div className="flex items-center pb-1">
          <span className="w-[5px] h-4 bg-light-mode-5 dark:bg-dark-mode-4"></span>
          <h2 className="text-base text-light-text-2 font-normal ml-3 dark:text-dark-mode-2">
            Linkedin
          </h2>
        </div>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
        <Link
          href="https://www.linkedin.com/in/tabatasouto/"
          passHref
          target="_blank"
        >
          <p className="text-xl font-normal text-blue dark:text-aqua p-3 max-[900px]:text-lg max-[400px]:text-base">
            linkedin.com/in/tabatasouto/
          </p>
        </Link>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
      </article>
      <article className="flex flex-col">
        <div className="flex items-center pb-1">
          <span className="w-[5px] h-4 bg-light-mode-5 dark:bg-dark-mode-4"></span>
          <h2 className="text-base text-light-text-2 font-normal ml-3 dark:text-dark-mode-2">
            Telefone
          </h2>
        </div>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
        <p className="text-xl font-normal p-3 max-[900px]:text-lg max-[400px]:text-base">(11) 94338-3072</p>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
      </article>
      <article className="flex flex-col">
        <div className="flex items-center pb-1">
          <span className="w-[5px] h-4 bg-light-mode-5 dark:bg-dark-mode-4"></span>
          <h2 className="text-base text-light-text-2 font-normal ml-3">
            GitHub
          </h2>
        </div>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
        <Link href="https://github.com/TabataSouto" passHref target="_blank">
          <p className="text-xl font-normal text-blue dark:text-aqua p-3 max-[900px]:text-lg max-[400px]:text-base">
            github.com/TabataSouto
          </p>
        </Link>
        <hr className="border-light-mode-2 dark:border-dark-mode-2" />
      </article>
    </main>
  );
};
