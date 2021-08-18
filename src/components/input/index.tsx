import React, { FC } from "react";

interface IInput {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  onEnter: () => void;
}

const Input: FC<IInput> = ({ value, handleChange, placeholder, onEnter }) => {
  const handleEnterClick = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <input
      value={value}
      onKeyDown={handleEnterClick}
      onChange={handleChange}
      className="input"
      placeholder={placeholder}
    />
  );
};

export default Input;
