import Image from "next/image";

interface SimpleCard {
  infosCard: {
    name: string;
    image: string;
    description: string;
    tags: string[];
  };
}

export const DetailCard = ({
  infosCard: { image, name, description, tags },
}: SimpleCard) => {
  return (
    <section className="flex-1 grid overflow-y-auto max-sm:hidden">
      <div className="relative flex flex-col gap-4 pt-4 bg-light-mode-2 dark:bg-dark-mode-2">
        <div className="flex items-center justify-center h-full px-3">
          <Image src={image} alt="name" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};
