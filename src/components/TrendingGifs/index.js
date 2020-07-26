import React, { useState, useEffect } from "react";
import getTrendingGifs from "services/getTrendingGifs";
import Category from "components/Category";

const TrendingGifs = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingGifs().then(setTrends);
  },[])

  return <Category name="Tendencias" options={trends} />;
};

export default TrendingGifs;
