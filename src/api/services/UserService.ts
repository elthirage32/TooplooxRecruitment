import { request } from "~api/request";

export const getListOfUsers = (page: number, query: string, limit = 10) =>
  request("GET", `search/users?page=${page}&per_page=${limit}&q=${query}`);

export const getUserDetails = (login: string) =>
  request("GET", `users/${login}`);

export const getUserRepos = (login: string) =>
  request("GET", `users/${login}/repos`);

export const getTop5Repos = (repos: any) => {
  const reposByStars = repos.sort((repoA: any, repoB: any) => {
    if (repoA.stargazers_count < repoB.stargazers_count) return 1;
    else if (repoA.stargazers_count > repoB.stargazers_count) return -1;
    return 0;
  });
  return reposByStars.slice(0, 5);
};
