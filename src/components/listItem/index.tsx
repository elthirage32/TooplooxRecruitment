import React, { FC } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IListItem {
  action: () => void;
  name: string;
  customIcon?: IconProp;
}

const ListItem: FC<IListItem> = ({ name, action, customIcon }) => (
  <div data-testid="list-item" className="list__item" onClick={action}>
    <div>
      {customIcon && (
        <FontAwesomeIcon
          data-testid="custom-icon"
          className="custom_icon"
          icon={customIcon}
        />
      )}
      {name}
    </div>
    <FontAwesomeIcon className="icon_primary" icon={faChevronRight} />
  </div>
);

export default ListItem;
