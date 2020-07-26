import React from "react";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";

const Results =({ params }) => {
  const { query } = params;
  const { gifs } = useGifs(query);
  return <ListOfGifs gifs={gifs} />;
}

export default Results;