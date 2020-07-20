import { baseUrl, apiKey } from "./constants";

const getApi = async (search) => {
  const data = {
    arrayUrls: null,
    error: "",
  };

  let url = baseUrl + "trending?api_key=" + apiKey;
  if (search !== "") {
    url = baseUrl + "search?api_key=" + apiKey + "&q=" + search;
  }
  const result = await fetch(url);
  console.log(result.status);
  const resultJson = await result.json();
  console.log(resultJson);
  if (result.status === 200) {
    const arrayUrls = resultJson.data.map(
      (value) => value.images.preview_gif.url
    );
    data.arrayUrls = arrayUrls;
  } else if (result.status === 403) {
    data.error = "Error 403";
  }
  return data;
};

export { getApi };
