import React, { FC } from "react";
import { UserSearchResponse } from "../types";
import SearchResultItem from "./SearchResultItem";

interface ISearchResults {
  usersList: UserSearchResponse;
}

const SearchResults: FC<ISearchResults> = ({ usersList }) => {
  return (
    <div className="search-container__body">
      <div className="search-body__results">
        {usersList &&
          usersList.items.map((user) => (
            <SearchResultItem user={user} key={user.id} />
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
