import React from "react";
import { useGifs } from "../hooks/useGifs";
import ListOfGifs from "../components/ListOfGifs";

const Home = () => {
  const { gifs } = useGifs();
  return <ListOfGifs gifs={gifs} />;
};

export default Home;
