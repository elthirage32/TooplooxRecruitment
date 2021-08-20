import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface IInput {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  onEnter: () => void;
}

const Input: FC<IInput> = ({ value, handleChange, placeholder, onEnter }) => {
  const handleEnterClick = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") onEnter();
  };

  return (
    <span className="input-container">
      <FontAwesomeIcon icon={faSearch} />
      <input
        data-testid="input"
        value={value}
        onKeyDown={handleEnterClick}
        onChange={handleChange}
        className="input"
        placeholder={placeholder}
      />
    </span>
  );
};

export default Input;
