import { createDislikePost } from "../service/api";

export const useCreateDislikePost = () => {
    const sendDislikePost = async (postId: string, userId: string) => {
      try {
        const data = await createDislikePost({rl_post: postId, rl_user: userId});
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return [sendDislikePost];
  };
  