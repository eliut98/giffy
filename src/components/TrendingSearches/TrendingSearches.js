import React, { useState, useEffect } from "react";
import getTrendingSearches from "services/getTrendingSearches";
import Category from "components/Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrendingSearches().then(setTrends);
    console.log("wtf");
  }, []);

  return <Category name="Tendencias" options={trends} />;
}
