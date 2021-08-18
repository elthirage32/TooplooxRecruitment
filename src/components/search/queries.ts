import { useQuery } from "react-query";
import {
  getListOfUsers,
  getUserDetails,
  getUserRepos,
} from "~api/services/UserService";

export const useUsersList = (query: string, page: number) => {
  return useQuery(
    ["usersList", page, query],
    async () => {
      const { data } = await getListOfUsers(page, query);
      return data;
    },
    { enabled: !!query }
  );
};

export const useUserDetails = (login: string) => {
  return useQuery("userDetails", async () => {
    const { data } = await getUserDetails(login);
    return data;
  });
};

export const useUserRepos = (login: string) => {
  return useQuery("userRepos", async () => {
    const { data } = await getUserRepos(login);
    return data;
  });
};
