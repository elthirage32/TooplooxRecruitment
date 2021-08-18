import React, { FC, useState } from "react";
import Input from "~components/input";
import LoadingButton from "~components/loadingButton";

interface ISearchHeader {}

const SearchHeader: FC<ISearchHeader> = ({}) => {
  const [inputValue, setInputValue] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log(inputValue);
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
