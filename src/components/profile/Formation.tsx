import { experienceData } from "@/data/experience";
import { formationData } from "@/data/formation";

export const Formation = () => {
  return (
    <main className="flex flex-col gap-8 py-10 pl-12 pr-16 max-sm:px-10 max-[400px]:px-6">
      {formationData.map(({ id, institute, title, level, hours, set }) => (
        <article key={id} className="flex flex-col pb-7">
          <div className="flex items-center pb-1">
            <span className="w-[5px] h-4 bg-light-mode-5 dark:bg-dark-mode-4"></span>
            <h2 className="text-base text-light-text-2 font-normal ml-3 dark:text-dark-mode-2">
              {institute}
            </h2>
          </div>
          <hr className="border-light-mode-2 dark:border-dark-mode-2" />
          <div className="flex items-center justify-between p-3 max-md:flex-col max-md:items-start max-sm:flex-row max-sm:items-center max-[520px]:flex-col max-[520px]:items-start">
            <p className="text-xl font-normal max-[900px]:text-lg max-[400px]:text-base">
              {title}
            </p>
            <p className="font-bold text-xs uppercase text-blue dark:text-aqua dark:font-medium dark:tracking-widest">
              {hours ? `${level} | ${hours}` : level}
            </p>
          </div>
          {set.length > 0 && (
            <ul className="pb-4">
              {set.length > 0 &&
                set.map((s, index) => (
                  <li
                    key={s}
                    className="text-sm text-light-text-2 font-normal ml-3 dark:text-dark-mode-2"
                  >
                    {`${index + 1}. ${s}`}
                  </li>
                ))}
            </ul>
          )}
          <hr className="border-light-mode-2 dark:border-dark-mode-2" />
        </article>
      ))}
    </main>
  );
};
