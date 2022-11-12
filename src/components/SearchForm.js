import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  // eslint-disable-next-line no-unused-vars
  const { setSearchTerm } = useGlobalContext();

  return (
    <div>
      <h2>search form component</h2>
    </div>
  );
};

export default SearchForm;
