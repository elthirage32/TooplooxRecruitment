import axios, { Method } from "axios";

export const request = async (method: Method, url: string) => {
  return await axios.request({
    method,
    url,
    baseURL: "https://api.github.com",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "application/vnd.github.v3+json",
    },
  });
};
