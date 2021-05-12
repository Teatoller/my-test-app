import React from "react";

export const Search = ({ value, onChange, children }) => {
    return (
      <div className="App">
        <label htmlFor="search">{children}</label>
        <input
          id="search"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  export default Search