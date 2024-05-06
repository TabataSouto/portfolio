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
    <section className="m-auto px-12  max-sm:hidden">
      <ul className="flex flex-wrap justify-center max-sm:px-10 max-[400px]:px-6">
        {projectsData.map(({ id, image, name }, index) => (
          <div
            key={id}
            className={`${
              index === indexProject
                ? "animate-border inline-block rounded-sm bg-gradient-to-r from-aqua via-[#3291ef] to-teal-400 bg-[length:400%_400%] p-[4px]"
                : "p-[4px] cursor-pointer"
            } w-[137px] max-[740px]:w-[105px]`}
          >
            <div
              className={`${
                index === indexProject
                  ? "bg-white back dark:bg-gray-800"
                  : "border-transparent"
              } w-32 max-[740px]:w-24`}
            >
              <li onClick={() => setIndexProject(index)} className="p-[1px]">
                <div className="shadow-sm shadow-gray-300 dark:shadow-black">
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt={name}
                    priority={false}
                    className="w-32 h-32 object-cover max-[740px]:w-24 max-[740px]:h-24"
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
