import React, { FC, useEffect, useState } from "react";
import pepe from "~assets/images/pepe.png";
import UserDetails from "~components/search/components/UserDetails";
import List from "~components/list";

import { UserSearchResponse } from "../types";
interface ISearchResults {
  usersList: UserSearchResponse;
  search: string;
}

const SearchResults: FC<ISearchResults> = ({ usersList, search }) => {
  const [selectedUserLogin, setSelectedUserLogin] = useState("");

  useEffect(() => {
    setSelectedUserLogin("");
  }, [search]);

  return (
    <div className="search-container__body">
      <div
        className={`search-body__results ${selectedUserLogin && "--hidden"}`}
      >
        <List
          listOfItems={usersList.items}
          emptyListComponent={
            <>
              <span className="search-results__text">{`We couldn't find anything like ${search}`}</span>
              <img src={pepe} alt="pepe" />
            </>
          }
          trackKeyBy="id"
          trackArgumentBy="login"
          trackNameBy="login"
          action={setSelectedUserLogin}
        />
      </div>
      {!!selectedUserLogin && (
        <UserDetails
          setSelectedUserLogin={setSelectedUserLogin}
          userLogin={selectedUserLogin}
        />
      )}
    </div>
  );
};

export default SearchResults;
