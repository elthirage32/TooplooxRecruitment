import React, { FC } from "react";
import ListItem from "~components/listItem";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IList {
  listOfItems: Array<any>;
  emptyListComponent: React.ReactChild;
  customIcon?: IconProp;
  trackKeyBy: string;
  trackNameBy: string;
  trackArgumentBy: string;
  action: (value: string) => void;
}

const List: FC<IList> = ({
  listOfItems,
  emptyListComponent,
  trackKeyBy,
  trackNameBy,
  trackArgumentBy,
  action,
  customIcon,
}) => {
  return (
    <>
      {listOfItems.length > 0
        ? listOfItems.map((element) => (
            <ListItem
              customIcon={customIcon}
              key={element[trackKeyBy]}
              name={element[trackNameBy]}
              action={() => action(element[trackArgumentBy])}
            />
          ))
        : emptyListComponent}
    </>
  );
};

export default List;
