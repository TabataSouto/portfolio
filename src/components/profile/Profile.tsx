import Image from "next/image";

export const ProfileUser = () => {
  return (
    <main className="flex flex-col gap-8 pt-10 pl-12 pr-16">
      <div>
        <Image
          src="/tabata.png"
          width={170}
          height={170}
          alt="tabata"
          className="w-40 h-40 object-cover"
        />
      </div>
    </main>
  );
};
