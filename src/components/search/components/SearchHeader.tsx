import React, { FC, useState, Dispatch, SetStateAction } from "react";
import Input from "~components/input";
import LoadingButton from "~components/loadingButton";

interface ISearchHeader {
  setSearch: Dispatch<SetStateAction<string>>;
  isFetching: boolean;
}

const SearchHeader: FC<ISearchHeader> = ({ setSearch, isFetching }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    setSearch(inputValue);
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
        isLoading={isFetching}
        handleClick={handleSearchSubmit}
        label="Search"
      />
    </div>
  );
};

export default SearchHeader;
