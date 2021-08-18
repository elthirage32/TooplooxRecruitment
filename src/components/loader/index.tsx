import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface ILoader {
  loaderClass?: string;
  loaderSize?: SizeProp;
}

const Loader: FC<ILoader> = ({ loaderClass, loaderSize }) => {
  return (
    <div className={loaderClass}>
      <FontAwesomeIcon spin size={loaderSize} icon={faSpinner} />
    </div>
  );
};

export default Loader;
