"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { profiles } from "@/data/profiles";
import { Context } from "@/context";

export const DesktopHeader = () => {
  const { selected, setSelected } = useContext(Context);
  const [timeString, setTimeString] = useState("");

  // chamada a cada segundo conforme definido no setInterval para atualizar a hora
  const tick = () => {
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString("pt", {
      hour12: false,
      timeStyle: "short",
    });
    setTimeString(formattedTime);
  };

  // chama a função tick que é atualizada a cada 1 segundo
  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <header className="pt-5 dark:text-white max-sm:hidden">
      <div className="flex mx-14 items-center justify-between gap-3">
        <div className="flex gap-1">
          {profiles.map(({ name, image }) => (
            <div
              key={image}
              onClick={() => setSelected(name)}
              className={`${
                name === selected
                  ? "animate-border inline-block rounded-full bg-gradient-to-r from-aqua via-[#3291ef] to-teal-400 bg-[length:400%_400%] p-1"
                  : "p-[4px]"
              }`}
            >
              <div className="bg-white back rounded-full dark:bg-gray-800">
                <Image
                  src={image}
                  alt=""
                  height={70}
                  width={70}
                  priority={false}
                  className={`${
                    selected === name ? "w-[70px] h-[70px]" : "w-16 h-16"
                  } object-cover rounded-full p-[2px]`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <p className="font-normal">{timeString}</p>
          <Image
            src="/wifi.svg"
            width={20}
            height={20}
            alt=""
            className="w-5 h-5 fill-current dark:invert"
          />
          <Image
            src="/battery.svg"
            width={25}
            height={25}
            alt=""
            className="fill-current dark:invert"
          />
        </div>
      </div>
    </header>
  );
};
