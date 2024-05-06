import { Dispatch, SetStateAction, useState } from "react";
import { projectsData } from "@/data/projects";

interface IButtonChangeImageProps {
  index: number;
  setOpacity: Dispatch<SetStateAction<number>>;
  setIndex: Dispatch<SetStateAction<number>>;
}

export const ButtonChangeImage = ({
  setOpacity,
  index,
  setIndex,
}: IButtonChangeImageProps) => {
  const handleChangeImage = (type: string) => {
    setOpacity(0);

    let newIndex: number;
    if (type === "next") {
      newIndex = index + 1;
    } else {
      newIndex = index - 1;
    }

    setTimeout(() => {
      setIndex(newIndex);
      setOpacity(1);
    }, 400);
  };

  return (
    <div className="flex justify-between min-[640px]:hidden pt-5">
      <button
        onClick={() => handleChangeImage("back")}
        className="bg-white rounded-full w-8 h-8 h disabled:opacity-0 dark:bg-dark-mode-3 text-light-text-2 dark:text-dark-mode-2"
        disabled={index === 0}
      >
        ❮
      </button>
      <button
        onClick={() => handleChangeImage("next")}
        className="bg-white rounded-full w-8 h-8 disabled:opacity-0 dark:bg-dark-mode-3 text-light-text-2 dark:text-dark-mode-2"
        disabled={index === projectsData.length - 1}
      >
        ❯
      </button>
    </div>
  );
};
