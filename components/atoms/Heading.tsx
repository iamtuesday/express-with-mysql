import { FC } from "react";

interface HeadingProps {
  subtitle: string;
  title: string;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({ subtitle, title, className }) => {
  return (
    <div className={`Heading-${className}`}>
      <div className="Heading-subtitle">
        {
          // <i className="icon-sparkle Heading-i"></i>
        }
        <h3 className="Heading-h3">{subtitle}</h3>
      </div>
      <h2 className="Heading-h2">{title}</h2>
    </div>
  );
};
