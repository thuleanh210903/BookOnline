import React, { ReactNode } from "react";

interface ButtonProps {
  type?: "primary" | "secondary" | "link";
  isDisabled?: boolean;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  type = "primary",
  isDisabled = false,
  children,
  href,
  onClick,
}) => {
  const base = "px-4 py-2 rounded font-medium focus:outline-none transition-colors duration-300";

  const primaryStyle = "bg-secondary text-black";
  const secondaryStyle = "bg-primary text-white";
  const linkStyle = "text-blue-500 underline hover:text-blue-700";
  const disabledStyle = "opacity-50 cursor-not-allowed";

  const getButtonStyle = () => {
    switch (type) {
      case "secondary":
        return secondaryStyle;
      case "link":
        return linkStyle;
      default:
        return primaryStyle;
    }
  };

  const classNames = `${base} ${getButtonStyle()} ${isDisabled ? disabledStyle : ""}`;

  if (href) {
    return (
      <a href={href} className={classNames} onClick={isDisabled ? undefined : onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classNames} onClick={isDisabled ? undefined : onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
