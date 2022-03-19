import axios from 'axios'

const httpClient = axios.create({
  baseURL: '"http://localhost:1337/api/',
  headers: {
    "Content-Type": "application/json",

  }
});

httpClient.get("categories").then((response) => {
  const res = response.data;
  return res
});

export default httpClient;

