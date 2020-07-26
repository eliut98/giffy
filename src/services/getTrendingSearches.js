import { settings } from "./settings";

export default async function getTrendingSearches() {
  const api_url = `//api.giphy.com/v1/trending/searches?api_key=${settings.API_KEY}`;

  const response = await fetch(api_url);
  const { data } = await response.json();

  return data;
}
