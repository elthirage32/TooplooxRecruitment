import { request } from "~api/request";

export const getListOfUsers = (page: number, query: string, limit = 10) =>
  request("GET", `search/users?page=${page}&per_page=${limit}&q=${query}`);

export const getUserDetails = (login: string) =>
  request("GET", `users/${login}`);

export const getUserRepos = (login: string) =>
  request("GET", `users/${login}/repos`);
