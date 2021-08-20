import React, { FC } from "react";
import ListItem from "~components/listItem";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IList {
  items: Array<any>;
  emptyListComponent: React.ReactChild;
  customIcon?: IconProp;
  trackKeyBy: string;
  trackNameBy: string;
  trackArgumentBy: string;
  action: (value: string) => void;
}

const List: FC<IList> = ({
  items,
  emptyListComponent,
  trackKeyBy,
  trackNameBy,
  trackArgumentBy,
  action,
  customIcon,
}) => {
  if (!items || items.length === 0) return <>{emptyListComponent}</>;

  return (
    <>
      {items.map((element) => (
        <ListItem
          customIcon={customIcon}
          key={element[trackKeyBy]}
          name={element[trackNameBy]}
          action={() => action(element[trackArgumentBy])}
        />
      ))}
    </>
  );
};

export default List;
