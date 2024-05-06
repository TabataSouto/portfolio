"use client";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { ButtonChangeImage } from "./ButtonChangeImage";

interface SimpleCard {
  indexProject: number;
  setIndexProject: Dispatch<SetStateAction<number>>;
  setOpacity: Dispatch<SetStateAction<number>>;
  opacity: number;
  infosCard: {
    name: string;
    image: string;
    description: string;
    tags: string[];
    web: string;
    github: string;
    status: string;
  };
}

export const DetailCard = ({
  opacity,
  setIndexProject,
  indexProject,
  setOpacity,
  infosCard: { image, name, github, web, description, tags },
}: SimpleCard) => {
  return (
    <section className="flex-1 grid overflow-y-auto text-light-text dark:text-white max-sm:pt-5">
      <div className="relative flex-1 flex flex-col items-center justify-center bg-light-mode-2 dark:bg-dark-mode-2 max-sm:bg-light-mode-1 max-sm:dark:bg-dark-mode-1">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          style={{
            opacity: opacity,
            transition: "opacity 0.5s ease-in-out",
          }}
          className="object-cover w-[450px] h-56 rounded-t-sm border-b-[1px] border-light-mode-2 max-[980px]:w-80 max-[980px]:h-40 max-md:w-72 max-sm:w-[400px] max-sm:h-52 max-[590px]:w-72 max-[590px]:h-40"
        />
        <div className="bg-white dark:bg-dark-mode-1 max-sm:dark:bg-dark-mode-2 w-[450px] rounded-b-sm px-8 py-5 flex flex-col gap-4 max-[980px]:w-80 max-md:w-72 max-sm:w-[400px] max-[590px]:w-72">
          <div className="flex justify-between max-[480px]:flex-col max-[480px]:gap-3">
            <div className="flex gap-6 max-[980px]:gap-3">
              <Link href={github} target="_blank" passHref>
                <Image
                  src="/github-open.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="fill-current dark:invert"
                />
              </Link>
              <Link href={web} target="_blank" passHref>
                <Image
                  src="/open-web.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="fill-current dark:invert"
                />
              </Link>
            </div>
            <div>
              <p className="text-xl font-normal text-blue dark:text-aqua max-[980px]:text-base max-lg:font-semibold max-[480px]:text-sm">
                {name}
              </p>
            </div>
          </div>
          <p className="font-normal text-base dark:font-light max-[980px]:text-sm">
            {description}
          </p>
          <p className="text-end text-xs uppercase font-medium text-light-text-2 dark:text-dark-mode-2 max-[480px]:text-[10px]">
            {tags.join(" - ")}
          </p>
        </div>
      </div>
      <ButtonChangeImage
        index={indexProject}
        setIndex={setIndexProject}
        setOpacity={setOpacity}
      />
    </section>
  );
};
