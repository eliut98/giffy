import React, { useState } from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Route, useLocation } from "wouter";

import "./styles/app.css";

export default function App() {
  const [location, setLocation] = useLocation();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(`/gif/${query}`);
  };

  return (
    <div className="app">
      <form className="search" onSubmit={(e) => handleSearch(e)}>
        <input
          type="search"
          placeholder="Search  all the gifs you want"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      <Route path="/gif/:query" component={ListOfGifs} />
    </div>
  );
}
