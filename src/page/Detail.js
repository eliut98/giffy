import React, { useContext } from "react";
import { Context } from "../context/GifsContext";

export default function Detail({ params }) {
  const { gifs } = useContext(Context);

  console.log(gifs);

  return <h1>{params.id}</h1>;
}
