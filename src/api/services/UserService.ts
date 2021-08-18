import { request } from "../request";

export const getListOfUsers = (page: number, query: string, limit = 10) =>
  request("GET", `search/users?page=${page}&per_page=${limit}&q=${query}`);
