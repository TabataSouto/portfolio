import Image from "next/image"

interface IDefaultHeaderProps {
  icon: string;
  title: string;
}

export const DefaultHeader = ({
  icon,
  title
}: IDefaultHeaderProps) => {
  return (
    <header className="pt-5 text-white">
      <div className="flex mx-14 items-center gap-3">
        <Image src={icon} width={40} height={40} alt="" />
        <p className="text-2xl">{title}</p>
      </div>
      <hr className="mx-6 mt-3" />
    </header>
  )
}