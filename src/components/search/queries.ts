import { useInfiniteQuery, useQuery } from "react-query";
import {
  getListOfUsers,
  getUserDetails,
  getUserRepos,
} from "~api/services/UserService";
import {
  IRepoModel,
  IUserModel,
  IUserSearchResponse,
} from "~components/search/types";

export const useUsersList = (query: string) =>
  useInfiniteQuery<IUserSearchResponse>(
    ["usersList", query],
    async ({ pageParam }) => {
      const { data } = await getListOfUsers(pageParam, query);
      return data;
    },
    { enabled: !!query }
  );

export const useUserDetails = (login: string) =>
  useQuery<IUserModel>("userDetails", async () => {
    const { data } = await getUserDetails(login);
    return data;
  });

export const useUserRepos = (login: string) =>
  useQuery<Array<IRepoModel>>("userRepos", async () => {
    const { data } = await getUserRepos(login);
    return data;
  });
