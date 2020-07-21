import { baseUrl, apiKey } from "./constants";

const getApi = async (search, page, qty) => {
  const data = {
    arrayUrls: null,
    error: "",
    pages: 0,
    totalGifs: 0,
  };
  page = page * qty - qty;
  let url =
    baseUrl +
    "trending?api_key=" +
    apiKey +
    "&offset=" +
    page.toString() +
    "&limit=" +
    qty;
  if (search !== "") {
    url =
      baseUrl +
      "search?api_key=" +
      apiKey +
      "&q=" +
      search +
      "&offset=" +
      page.toString() +
      "&limit=" +
      qty;
  }
  console.log(url);
  const result = await fetch(url);
  console.log(result);
  const resultJson = await result.json();
  console.log(resultJson);
  if (result.status === 200) {
    const arrayUrls = resultJson.data.map(
      (value) => value.images.preview_gif.url
    );
    data.arrayUrls = arrayUrls;
    if (resultJson.pagination.total_count > 5000) {
      data.pages = Math.ceil(5000 / Number(qty));
      data.totalGifs = 5000;
    } else {
      data.pages = Math.ceil(resultJson.pagination.total_count / Number(qty));
      data.totalGifs = resultJson.pagination.total_count;
    }
  } else if (result.status === 403) {
    data.error = "Error 403";
  }
  console.log(data);
  return data;
};

export { getApi };
