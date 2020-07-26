import React from "react";
import { Link } from "wouter";
const Gif = ({ id, title, url }) => {
  return (
    <figure className="gif">
      <img
        src={url}
        alt={title}
        style={{
          width: "100%",
        }}
      />
      <Link to={`/gif/${id}`}>{id}</Link>
    </figure>
  );
};

export default Gif;
