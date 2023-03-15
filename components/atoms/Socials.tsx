import { FC } from "react";
//  import { useGenerals } from '../../context/generals.context'
interface SocialsProps {
  className?: string;
}

const socials = [
  {
    id: 1,
    type: "Instagram",
    url: "",
  },
];
export const Socials: FC<SocialsProps> = ({ className }) => {
  //  const {polylang} = useGenerals();
  return (
    <div className={`socials ${className}`}>
      {socials.map(({ type, id, url }) => (
        <div
          key={id}
          className={`${type === "youtube" ? "youtube" : ""} `}
          title={`${!url && "Coming soon"}`}
        >
          <a
            className={`socials__link ${!url ? "pointer-events-none" : ""}`}
            href={url ? url : "#"}
            target="_blank"
            rel="noreferrer"
          >
            <i className={`socials__icon icon-${type} `} />
          </a>
        </div>
      ))}
    </div>
  );
};
