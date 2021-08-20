import React, { FC } from "react";
import Loader from "~components/loader";

export interface ILoadingButton {
  handleClick: () => void;
  isLoading: boolean;
  label: string;
  customClass?: string;
}

const LoadingButton: FC<ILoadingButton> = ({
  handleClick,
  isLoading,
  label,
  customClass,
}) => (
  <button
    onClick={handleClick}
    disabled={isLoading}
    data-testid="loading-button"
    className={`btn ${isLoading && "btn--disabled"} ${customClass}`}
  >
    <span>
      {!isLoading && label}
      {isLoading && <Loader />}
    </span>
  </button>
);

export default LoadingButton;
