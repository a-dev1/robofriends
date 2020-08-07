import React from "react";

const SearchBar = ({ searchChange }) => {
  return (
    <input
      type={SearchBar}
      placeholder={"Search Robot"}
      className="pa3 ba b--green bg-lightest-blue"
      onChange={searchChange}
    ></input>
  );
};

export default SearchBar;
