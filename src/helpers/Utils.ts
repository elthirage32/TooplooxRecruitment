import { IRepoModel, IUserSearchResponse } from "~components/search/types";
import { InfiniteData } from "react-query";

export const getTop5Repos = (repos: Array<IRepoModel>) => {
  const reposByStars = repos.sort((repoA, repoB) => {
    if (repoA.stargazers_count < repoB.stargazers_count) return 1;
    else if (repoA.stargazers_count > repoB.stargazers_count) return -1;
    return 0;
  });
  return reposByStars.slice(0, 5);
};

export const checkIfCanFetchMoreUsers = (
  userResponse: InfiniteData<IUserSearchResponse>
) => {
  let itemsCount = 0;
  const totalItems = userResponse?.pages[0].total_count;
  userResponse?.pages.map((page) => {
    itemsCount = itemsCount + page.items.length;
  });
  console.log(itemsCount);
  return itemsCount < totalItems;
};
