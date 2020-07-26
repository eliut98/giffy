import React from "react";
import { Link } from "wouter";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="list-of-gif">
      {gifs.map(({ url, title, id }) => (
        <Gif id={id} title={title} url={url} key={id} />
      ))}
    </div>
  );
};

export default ListOfGifs;
