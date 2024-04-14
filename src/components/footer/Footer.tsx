import Image from "next/image";
import controller from "@/../public/controller.png";

interface IFooterProps {
  buttonY: boolean;
  buttonB: boolean;
  buttonA: boolean;
  buttonX: boolean;
  titleButtonY?: string;
  titleButtonB?: string;
  titleButtonX?: string;
  titleButtonA?: string;
}

export const Footer = ({
  buttonY = false,
  titleButtonY,
  buttonB = false,
  titleButtonB,
  buttonA = false,
  titleButtonA,
  buttonX = false,
  titleButtonX,
}: IFooterProps) => {
  return (
    <footer className="bg-switch1 text-white text-lg">
      <hr className="mx-6" />
      <div className="flex items-center justify-between px-14 py-3">
        <div className="flex flex-col items-center">
          <div className="flex gap-1 items-center">
            <div className="w-[7px] h-[7px] bg-[#A6D13B]"></div>
            <div className="w-[5px] h-[5px] bg-[#848484]"></div>
            <div className="w-[5px] h-[5px] bg-[#848484]"></div>
            <div className="w-[5px] h-[5px] bg-[#848484]"></div>
          </div>
          <Image src={controller} alt="" />
        </div>
        <div className="flex gap-8">
          {buttonY && (
            <div className="flex gap-2 items-center">
              <button className="text-switch1 bg-white rounded-full w-[1.375rem] h-[1.375rem] font-bold text-base flex items-center justify-center">
                Y
              </button>
              <p>{titleButtonY}</p>
            </div>
          )}
          {buttonB && (
            <div className="flex gap-2 items-center">
              <button className="text-switch1 bg-white rounded-full w-[1.375rem] h-[1.375rem] font-bold text-base flex items-center justify-center">
                B
              </button>
              <p>{titleButtonB}</p>
            </div>
          )}
          {buttonA && (
            <div className="flex gap-2 items-center">
              <button className="text-switch1 bg-white rounded-full w-[1.375rem] h-[1.375rem] font-bold text-base flex items-center justify-center">
                A
              </button>
              <p>{titleButtonA}</p>
            </div>
          )}
          {buttonX && (
            <div className="flex gap-2 items-center">
              <button className="text-switch1 bg-white rounded-full w-[1.375rem] h-[1.375rem] font-bold text-base flex items-center justify-center">
                X
              </button>
              <p>{titleButtonX}</p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
