import React, { FC, useEffect, useState } from "react";
import pepe from "~assets/images/pepe.png";
import UserDetails from "~components/search/components/UserDetails";
import List from "~components/list";

import { InfiniteData } from "react-query";
import { IUserSearchResponse } from "~components/search/types";
import { checkIfCanFetchMoreUsers } from "~helpers/Utils";
import LoadingButton from "~components/loadingButton";
interface ISearchResults {
  usersListResponse?: InfiniteData<IUserSearchResponse>;
  search: string;
  isFetching: boolean;
  handleLoadMore: () => void;
}

const SearchResults: FC<ISearchResults> = ({
  usersListResponse,
  search,
  isFetching,
  handleLoadMore,
}) => {
  const [selectedUserLogin, setSelectedUserLogin] = useState("");

  useEffect(() => {
    setSelectedUserLogin("");
  }, [search]);

  const emptyListFallback = (
    <>
      <span className="search-results__text">{`We couldn't find anything like ${search}`}</span>
      <img src={pepe} alt="pepe" />
    </>
  );

  return (
    <div className="search-container__body">
      <div
        className={`search-body__results ${selectedUserLogin && "--hidden"}`}
      >
        {usersListResponse &&
          usersListResponse.pages.map((page, index) => (
            <List
              items={page.items}
              key={index}
              emptyListComponent={emptyListFallback}
              trackKeyBy="id"
              trackArgumentBy="login"
              trackNameBy="login"
              action={setSelectedUserLogin}
            />
          ))}
      </div>
      {checkIfCanFetchMoreUsers(usersListResponse!) && (
        <LoadingButton
          customClass={`${selectedUserLogin && "--hidden"} --outline`}
          label="Load more"
          isLoading={isFetching}
          handleClick={handleLoadMore}
        />
      )}
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
