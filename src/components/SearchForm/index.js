import React, { useState } from "react";

import "./SearchForm.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ query });
  };

  return (
    <form className="search" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        placeholder="Search  all the gifs you want"
        onChange={(e) => handleChange(e)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
