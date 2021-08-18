import React, { FC } from "react";
import { UserModel } from "~components/search/types";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISearchResultItem {
  user: UserModel;
}

const SearchResultItem: FC<ISearchResultItem> = ({ user }) => {
  return (
    <div className="search-results__item">
      <div>{user.login}</div>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

export default SearchResultItem;
