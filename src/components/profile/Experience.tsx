import { experienceData } from "@/data/experience";

export const Experience = () => {
  return (
    <main className="flex flex-col gap-8 py-10 pl-12 pr-16 max-sm:px-10 max-[400px]:px-6">
      {experienceData.map(({ id, company, role, date, description, tags }) => (
        <article key={id} className="flex flex-col pb-7">
          <div className="flex items-center pb-1">
            <span className="w-[5px] h-4 bg-light-mode-5 dark:bg-dark-mode-4"></span>
            <h2 className="text-base text-light-text-2 font-normal ml-3  dark:text-dark-mode-2">
              {company}
            </h2>
          </div>
          <hr className="border-light-mode-2 dark:border-dark-mode-2" />
          <div className="flex items-center justify-between p-3 ">
            <p className="text-xl font-normal max-[900px]:text-lg max-[400px]:text-base">
              {role}
            </p>
            <p className="font-medium text-xs uppercase text-aqua">{date}</p>
          </div>
          <p className="text-lg px-3 pb-5 max-[900px]:text-base">
            {description}
          </p>
          <p className="text-right text-sm text-light-text-2 font-normal ml-3 dark:text-dark-mode-2 pb-4">
            {tags.join(" - ")}
          </p>
          <hr className="border-light-mode-2 dark:border-dark-mode-2" />
        </article>
      ))}
    </main>
  );
};
