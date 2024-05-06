import { projectsData } from "@/data/projects";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ISimpleCardProps {
  indexProject: number;
  setIndexProject: Dispatch<SetStateAction<number>>;
}

export const SimpleCard = ({
  indexProject,
  setIndexProject,
}: ISimpleCardProps) => {
  return (
    <section className="flex-1">
      <ul className="py-10 px-12 grid grid-cols-4 items-center max-sm:px-10 max-[400px]:px-6">
        {projectsData.map(({ id, image, name }, index) => (
          <div
            key={id}
            className={`${
              index === indexProject
                ? "animate-border inline-block rounded-sm bg-gradient-to-r from-aqua via-[#3291ef] to-teal-400 bg-[length:400%_400%] p-[4px]"
                : "p-[4px] cursor-pointer"
            }`}
          >
            <div
              className={`${
                index === indexProject
                  ? "bg-white back dark:bg-gray-800"
                  : "border-transparent"
              }`}
            >
              <li onClick={() => setIndexProject(index)} className="p-[1px]">
                <div className="shadow-sm shadow-gray-300 dark:shadow-black">
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={name}
                    priority={false}
                    className="w-40 h-40 object-cover"
                  />
                </div>
              </li>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};
