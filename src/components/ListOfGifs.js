import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

const ListOfGifs = ({ params }) => {
  const { query } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(query).then(setGifs);
  }, [query]);

  return (
    <div className="list-of-gif">
      {gifs.map(({ url, title, id }) => (
        <Gif title={title} url={url} key={id} />
      ))}
    </div>
  );
};

export default ListOfGifs;
