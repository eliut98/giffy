import React, { useState, useEffect, useRef } from "react";
import getTrendingGifs from "services/getTrendingGifs";
import Category from "components/Category";

const TrendingGifs = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingGifs().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
};

export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const onView = (entries) => {
      const element = entries[0];
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onView, { rootMargin: "100px" });

    observer.observe(elementRef.current);

    return observer.disconnect();
  });

  return <div ref={elementRef}>{show ? <TrendingGifs /> : null}</div>;
}
