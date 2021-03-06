import React from "react";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";

const Home = () => {
  const [_, pushLocation] = useLocation();
  const { gifs } = useGifs();

  const handleSubmitSearchForm = ({ query }) => {
    pushLocation(`/search/${query}`);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmitSearchForm} />
      <div>
        <div>
          <h3>Última búsqueda</h3>
          <ListOfGifs gifs={gifs} />
        </div>
        <div>
          <TrendingSearches />
        </div>
      </div>
    </>
  );
};

export default Home;
