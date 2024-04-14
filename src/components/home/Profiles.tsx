"use client";
import { profiles } from "@/data/profiles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Profiles = () => {
  const [selected, setSelected] = useState("taby");

  return (
    <main className="pt-10 pl-12">
      <ul className="flex">
        {profiles.map(({ image, name }) => (
          <Link
            href={`${name === "taby" ? "/dashboard" : ""}`}
            key={name + image}
            onClick={() => setSelected(name)}
          >
            {/* <div
              className={`${
                name === selected
                  ? "flex"
                  : "border-transparent"
              }`}
            > */}
            <div
              className={`${
                name === selected
                  ? "animate-border inline-block rounded-sm bg-gradient-to-r from-aqua via-[#3291ef] to-teal-400 bg-[length:400%_400%] p-[4px]"
                  : "p-[3px]"
              }`}
            >
              <div
                className={`${
                  name === selected ? "bg-white back dark:bg-gray-800" : "border-transparent"
                }`}
              >
                <li
                  onClick={() => setSelected(name)}
                  className="p-[1px]"
                >
                  <div className="shadow-sm shadow-gray-300 dark:shadow-black">
                    <Image
                      src={image}
                      width={250}
                      height={250}
                      alt="Perfil da Tabata"
                      className="w-40 h-40 object-cover"
                    />
                    <p className="bg-white text-light-text dark:text-white font-normal dark:font-light dark:bg-[#727272] w-40 h-10 text-center leading-10">
                      {name}
                    </p>
                  </div>
                </li>
              </div>
            </div>
            {/* </div> */}
          </Link>
        ))}
      </ul>
    </main>
  );
};
