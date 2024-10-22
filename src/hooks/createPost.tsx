import { createPost } from "../service/api";

export const useCreatePost = () => {
  const createNewPost = async (content: string) => {
    try {
      const data = await createPost(content);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return [createNewPost];
};
