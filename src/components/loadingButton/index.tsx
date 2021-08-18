import React, { FC } from "react";

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
      data-testid="btn-loading"
      onClick={handleClick}
      disabled={isLoading}
      className={`btn ${isLoading && "btn--disabled"}`}
    >
      <span>
        {!isLoading && label}
        {isLoading && <span data-testid="btn-loading__loading"></span>}
      </span>
    </button>
  );
};

export default LoadingButton;
