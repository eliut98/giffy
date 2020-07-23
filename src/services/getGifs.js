const api_key = "CSRdyV7LpvTC11jWnsZ4YswnbY3yyBwW";

export default function getGifs(query) {
  const api_url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}&limit=5`;

  return fetch(api_url)
    .then((respose) => respose.json())
    .then(({ data }) => {
      return data.map((gif) => {
        return {
          title: gif.title,
          id: gif.id,
          url: gif.images.downsized_medium.url,
        };
      });
    });
}