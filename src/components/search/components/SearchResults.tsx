import React, { FC } from "react";
import { UserSearchResponse } from "../types";
import SearchResultItem from "./SearchResultItem";
import pepe from "~assets/images/pepe.png";

interface ISearchResults {
  usersList: UserSearchResponse;
  search: string;
}

const SearchResults: FC<ISearchResults> = ({ usersList, search }) => {
  console.log(usersList);
  return (
    <div className="search-container__body">
      {usersList && (
        <div className="search-body__results">
          {usersList.total_count > 1 ? (
            usersList.items.map((user) => (
              <SearchResultItem user={user} key={user.id} />
            ))
          ) : (
            <>
              <span className="search-results__text">{`We couldn't find anything like ${search}`}</span>
              <img src={pepe} alt="pepe" />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
