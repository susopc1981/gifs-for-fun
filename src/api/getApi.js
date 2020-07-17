import { baseUrl, apiKey } from "./constants";

const getApi = async (search) => {
  let url = baseUrl + "trending?api_key=" + apiKey;
  if (search !== "") {
    url = baseUrl + "search?api_key=" + apiKey + "&q=" + search;
  }
  const result = await fetch(url);
  const resultJson = await result.json();
  const arrayUrls = resultJson.data.map(
    (value) => value.images.preview_gif.url
  );
  return arrayUrls;
};

export { getApi };
