import React, { FC } from "react";
import SearchHeader from "./components/SearchHeader";

interface ISearch {}

const Search: FC<ISearch> = ({}) => {
  return (
    <div className="search-container">
      <SearchHeader />
    </div>
  );
};

export default Search;
