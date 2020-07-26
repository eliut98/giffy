import { useContext, useEffect } from "react";
import getGifs from "services/getGifs";
import GifsContext from "context/GifsContext";

export const useGifs = ({ query } = { query: null }) => {
  const { gifs, setGifs } = useContext(GifsContext);

  const search = query || localStorage.getItem("lastQuery") || "random";

  useEffect(() => {
    getGifs(search).then(setGifs);
    if (query) localStorage.setItem("lastQuery", query);
  }, [query, setGifs]);

  return { gifs };
};
