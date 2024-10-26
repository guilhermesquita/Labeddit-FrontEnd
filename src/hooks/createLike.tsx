import { createLikePost } from "../service/api";

export const useCreateLikePost = () => {
    const sendLikePost = async (postId: string, userId: string) => {
      try {
        const data = await createLikePost({rl_post: postId, rl_user: userId});
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return [sendLikePost];
  };
  