import React, { FC, useState } from "react";
import SearchHeader from "./components/SearchHeader";
import SearchResults from "./components/SearchResults";
import { useUsersList } from "~components/search/queries";

const Search: FC = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const { data, isFetching, fetchNextPage, isFetchingNextPage } =
    useUsersList(search);

  const handleSetSearch = async (searchValue: string) => {
    setPage(1);
    setSearch(searchValue);
  };

  const handleLoadMore = async () => {
    await fetchNextPage({ pageParam: page + 1 });
    setPage(page + 1);
  };

  return (
    <div className="search-container">
      <SearchHeader isFetching={isFetching} handleSetSearch={handleSetSearch} />
      <SearchResults
        handleLoadMore={handleLoadMore}
        isFetching={isFetchingNextPage}
        search={search}
        usersListResponse={data}
      />
    </div>
  );
};

export default Search;
