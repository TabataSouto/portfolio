"use client";
import { DesktopHeader } from "./Desktop";
import { MobileHeader } from "./MobileHeader";
import { usePathname } from "next/navigation";
import { DashboardHeader } from "./DashboardHeader";

interface IDefaultHeaderProps {
  icon?: string;
  title: string;
  list?: {
    tag: string;
    title: string;
    url?: string;
  }[];
}

export const DefaultHeader = ({ icon, title, list }: IDefaultHeaderProps) => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/dashboard" ? (
        <DashboardHeader />
      ) : (
        <DesktopHeader icon={icon ?? ""} title={title} />
      )}
      <MobileHeader list={list ?? []} />
    </>
  );
};
