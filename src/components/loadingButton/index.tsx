import React, { FC } from "react";
import Loader from "~components/loader";

interface ILoadingButton {
  handleClick: () => void;
  isLoading: boolean;
  label: string;
}

const LoadingButton: FC<ILoadingButton> = ({
  handleClick,
  isLoading,
  label,
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`btn ${isLoading && "btn--disabled"}`}
    >
      <span>
        {!isLoading && label}
        {isLoading && <Loader />}
      </span>
    </button>
  );
};

export default LoadingButton;
