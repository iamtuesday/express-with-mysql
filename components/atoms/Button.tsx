import React, { FC, ReactNode } from "react";
// interface to declare all our prop types
interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant?: string; // default, primary, info, success, warning, danger, dark
  disabled?: boolean;
  iconType?: string;
}
// button component, consuming props
export const Button: FC<Props> = ({
  children,
  onClick,
  variant = "default",
  disabled,
  iconType = "",
  ...rest
}) => {
  return (
    <button
      className={`btn-${variant}` + (disabled ? " disabled" : "")}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {iconType && <span className={`icon-${iconType}`}></span>}
      {children}
    </button>
  );
};
