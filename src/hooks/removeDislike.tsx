import { deleteDislikePost } from "../service/api";

export const useRemoveDislikePost = () => {
    const removeDislikePost = async (postId: string, userId: string) => {
      try {
        const data = await deleteDislikePost({rl_post: postId, rl_user: userId});
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return [removeDislikePost];
  };
  