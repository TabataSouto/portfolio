import Image from "next/image";
import { User } from "./User";
import { AboutMe } from "./About";

export const ProfileUser = () => {
  return (
    <main className="flex flex-col gap-8 pt-10 pl-12 pr-16 max-sm:px-10 max-[400px]:px-6">
      <User />
      <AboutMe />
    </main>
  );
};
