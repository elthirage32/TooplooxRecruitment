import { useQuery } from "react-query";
import { getListOfUsers } from "../../api/services/UserService";

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
