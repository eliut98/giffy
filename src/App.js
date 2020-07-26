import React, { useState } from "react";
import Home from "./page/Home";
import Results from "./page/search/results";
import { GifsContextProvider } from "./context/GifsContext";

import { Route, useLocation } from "wouter";

import "./styles/app.css";

export default function App() {
  const [location, setLocation] = useLocation();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(`/search/${query}`);
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
      <GifsContextProvider>
        <Route path="/" component={Home} />
        <Route path="/search/:query" component={Results} />
      </GifsContextProvider>
    </div>
  );
}
