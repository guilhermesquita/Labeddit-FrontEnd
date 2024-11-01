import { userById } from "../service/api";

export const useGetUserById = () => {
  const getUserById = async (id: string) => {
    const user = await userById(id);
    return user;
  };
  return [getUserById];
};
