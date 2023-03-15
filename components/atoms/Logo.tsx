import { FC } from "react";
import Image from "next/image";
import { useGenerals } from "../../context/generals.context";
import { useRouter } from "next/router";

const logo = {
    url: "/img/logo.png",
    width: 500,
    height: 500,
    name: "Logo"

}

export const Logo: FC = () => {
  const { polylang } = useGenerals();
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  const { url, width, height, name } = logo;
  return (
    <picture className="cursor-pointer" onClick={handleClick}>
      <Image src={url} alt={name} width={width} height={height} />
    </picture>
  );
};
