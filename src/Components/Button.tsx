import React from "react";

interface ButtonProps {
  value: string;
  important?: boolean;
  // type?: "button" | "submit" | "reset";
  type?: "submit";
  myStyle?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  value,
  important,
  type,
  onClick,
  myStyle,
}) => {
  const buttonStyle: React.CSSProperties = important
    ? { boxShadow: "0px 20px 32px 0px #0201006B" }
    : {};

  return (
    <button
      className={myStyle}
      type={type}
      style={buttonStyle}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
