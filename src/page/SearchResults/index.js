import React from "react";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";

const SearchResults = ({ params }) => {
  const { query } = params;
  console.log(query);
  const { gifs } = useGifs({ query });
  return (
    <>
      <h2>{decodeURI(query)}</h2>
      <ListOfGifs gifs={gifs} />
    </>
  );
};

export default SearchResults;
