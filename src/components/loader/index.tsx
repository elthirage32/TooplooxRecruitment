import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface ILoader {
  size?: SizeProp;
}

const Loader: FC<ILoader> = ({ size }) => (
  <FontAwesomeIcon spin size={size} icon={faSpinner} />
);

export default Loader;
