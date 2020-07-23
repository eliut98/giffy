import React from "react";

const Gif = ({ url, title }) => {
  return (
    <figure className="gif">
      <img
        src={url}
        alt={title}
        style={{
          width: "100%",
        }}
      />
    </figure>
  );
};

export default Gif;
