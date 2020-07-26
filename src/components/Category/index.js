import React from "react";
import { Link } from "wouter";

const Category = ({ name, options = [] }) => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {options.map((singleOption, index) => (
          <li key={index}>
            <Link to={`/search/${singleOption}`}>{singleOption}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
