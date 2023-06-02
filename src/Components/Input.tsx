import React, { ChangeEvent, FC } from "react";

interface myInputProps {
  myStyle: string;
  type: string;
  placeholder: string;
  height?: string;
  width?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<myInputProps> = ({
  myStyle,
  type,
  placeholder,
  height,
  width,
  value,
  onChange,
}) => {
  return (
    <div>
      <input
        className={myStyle}
        type={type}
        placeholder={placeholder}
        style={{ height, width }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
