import React from "react";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";

const SearchResults = ({ params }) => {
  const { query } = params;
  console.log(query);
  const { gifs } = useGifs({ query });
  return <ListOfGifs gifs={gifs} />;
};

export default SearchResults;
