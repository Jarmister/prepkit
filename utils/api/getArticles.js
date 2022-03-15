import httpClient from "./httpClient";

httpClient.get("http://localhost:1337/api/articles").then((response) => {
  const res = response.data;
  return res
});