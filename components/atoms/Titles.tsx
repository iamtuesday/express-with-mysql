import { FC } from "react";

interface TitlesProps {
    subtitle: string;
    title: string;
    className?: string;
}

export const Titles: FC<TitlesProps> = ({ subtitle, title, className }) => {
    return (
        <div className={`Titles-${className}`}>
            <h3 className="Titles-h3">{subtitle}</h3>
            <h2 className="Titles-h2">{title}</h2>
        </div>
    );
};
