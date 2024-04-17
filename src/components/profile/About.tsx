import Image from "next/image";

export const AboutMe = () => {
  return (
    <article className="flex flex-col pt-4">
      <div className="flex items-center pb-1">
        <span className="absolute w-[5px] h-4 bg-light-mode-5 dark:bg-dark-mode-4"></span>
        <h2 className="text-base text-light-text-2 font-normal mx-3 dark:text-dark-mode-2 flex justify-between w-full max-[400px]:text-sm">
          Quem é taby
          <span>
            <Image
              src="/question.svg"
              width={18}
              height={18}
              alt=""
              className="fill-current dark:invert max-[400px]:hidden"
            />
          </span>
        </h2>
      </div>
      <hr className="border-light-mode-2 dark:border-dark-mode-2" />
      <p className="text-xl font-normal p-3 dark:font-light dark:tracking-[0.05em] max-md:text-lg max-[480px]:text-base">
        Apaixonada pelo mundo do{" "}
        <span className="text-blue dark:text-aqua font-normal dark:font-light">
          Desenvolvimento
        </span>{" "}
        e{" "}
        <span className="text-blue dark:text-aqua font-normal dark:font-light">
          Design Web
        </span>
        , hoje atuo como{" "}
        <span className="text-blue dark:text-aqua font-normal dark:font-light">
          Desenvolvedora FullStack
        </span>{" "}
        na{" "}
        <span className="text-blue dark:text-aqua font-normal dark:font-light">
          Peticionee
        </span>{" "}
        e participo de um grande projeto chamado Achievo na{" "}
        <span className="text-blue dark:text-aqua font-normal dark:font-light">
          Skill Labs
        </span>
        . Minha mais{" "}
        <span className="text-blue dark:text-aqua font-normal dark:font-light">
          recente experiência acadêmica
        </span>{" "}
        foi o curso de HTML e CSS para iniciantes da{" "}
        <span className="text-blue dark:text-aqua font-normal dark:font-light">
          Origamd
        </span>{" "}
        com intuito de rever conceito importantes e outros como CSS GRID no qual
        ainda não tinha conhecimento.{" "}
        <span className="text-blue dark:text-aqua font-normal dark:font-light">
          Estou sempre em busca de novos aprendizados!
        </span>
      </p>
      <hr className="border-light-mode-2 dark:border-dark-mode-2" />
    </article>
  );
};
