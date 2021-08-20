import React, { FC, useState } from "react";
import Input from "~components/input";
import LoadingButton from "~components/loadingButton";

interface ISearchHeader {
  handleSetSearch: (searchValue: string) => void;
  isFetching: boolean;
  isFetchingNextPage: boolean;
}

const SearchHeader: FC<ISearchHeader> = ({
  handleSetSearch,
  isFetching,
  isFetchingNextPage,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    handleSetSearch(inputValue);
  };

  return (
    <div className="search-container__header">
      <Input
        value={inputValue}
        onEnter={handleSearchSubmit}
        handleChange={handleInputChange}
        placeholder="Search github users"
      />
      <LoadingButton
        isLoading={isFetching && !isFetchingNextPage}
        handleClick={handleSearchSubmit}
        label="Search"
      />
    </div>
  );
};

export default SearchHeader;
