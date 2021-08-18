import React, { FC, useState } from "react";
import SearchHeader from "./components/SearchHeader";
import SearchResults from "./components/SearchResults";
import { useUsersList } from "~components/search/queries";

interface ISearch {}

const Search: FC<ISearch> = ({}) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isFetching } = useUsersList(search, page);

  return (
    <div className="search-container">
      <SearchHeader isFetching={isFetching} setSearch={setSearch} />
      <SearchResults usersList={data} />
    </div>
  );
};

export default Search;
