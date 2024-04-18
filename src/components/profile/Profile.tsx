import Image from "next/image";
import { User } from "./User";
import { AboutMe } from "./About";

export const ProfileUser = () => {
  return (
    <main className="flex-1">
      <div className="py-10 pl-12 pr-16 max-sm:px-10 max-[400px]:px-6">
        <User />
        <AboutMe />
      </div>
    </main>
  );
};
