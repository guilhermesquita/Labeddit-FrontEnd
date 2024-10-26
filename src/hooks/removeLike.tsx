import { deleteLikePost } from "../service/api";

export const useRemoveLikePost = () => {
    const removeLikePost = async (postId: string, userId: string) => {
      try {
        const data = await deleteLikePost({rl_post: postId, rl_user: userId});
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return [removeLikePost];
  };
  