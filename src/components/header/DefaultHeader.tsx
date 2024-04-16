import Image from "next/image";
import { DesktopHeader } from "./Desktop";

interface IDefaultHeaderProps {
  icon: string;
  title: string;
}

export const DefaultHeader = ({ icon, title }: IDefaultHeaderProps) => {
  return (
    <>
      <DesktopHeader icon={icon} title={title} />
    </>
  );
};
