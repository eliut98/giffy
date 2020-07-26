import React, { useState } from "react";
import Home from "./page/Home";
import Detail from "./page/Detail";
import Results from "./page/search/results";
import { GifsContextProvider } from "./context/GifsContext";
import { Route } from "wouter";

import "./styles/app.css";

export default function App() {
  return (
    <div className="app">
      <GifsContextProvider>
        <Route path="/" component={Home} />
        <Route path="/gif/:id" component={Detail} />
        <Route path="/search/:query" component={Results} />
      </GifsContextProvider>
    </div>
  );
}
