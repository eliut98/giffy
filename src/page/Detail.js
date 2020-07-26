import React, { useContext } from "react";
import GifsContext from "../context/GifsContext";
import Gif from "../components/Gif";

export default function Detail({ params }) {
  const { gifs } = useContext(GifsContext);

  const gif = gifs.find((gif) => gif.id === params.id);

  return <Gif {...gif} />;
}
