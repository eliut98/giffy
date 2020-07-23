import React from "react";
import ListOfGifs from "./components/ListOfGifs";
import { Route } from "wouter";

import "./styles/app.css";

export default function App() {
  return (
    <div className="app">
      <div className="search">
        <input type="search" placeholder="Search  all the gifs you want" />
        <button>Search</button>
      </div>
      <Route path="/gif/:query" component={ListOfGifs} />
    </div>
  );
}
