import { settings } from "./settings";

export default async function getGifs(query) {
  const api_url = `${settings.API_URL}/search?q=${query}&api_key=${settings.API_KEY}`;

  const response = await fetch(api_url);
  const { data } = await response.json();

  return data.map((gif) => {
    return {
      title: gif.title,
      id: gif.id,
      url: gif.images.downsized_medium.url,
    };
  });
}
