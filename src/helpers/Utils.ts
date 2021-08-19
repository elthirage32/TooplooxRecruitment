export const getTop5Repos = (repos: any) => {
  const reposByStars = repos.sort((repoA: any, repoB: any) => {
    if (repoA.stargazers_count < repoB.stargazers_count) return 1;
    else if (repoA.stargazers_count > repoB.stargazers_count) return -1;
    return 0;
  });
  return reposByStars.slice(0, 5);
};
