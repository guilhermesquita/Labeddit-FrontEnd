import { deleteDislikeComment } from "../service/api";

export const useRemoveDislikeComment = () => {
    const removeDislikeComment = async (commentId: string, userId: string) => {
      try {
        const data = await deleteDislikeComment({rl_comment: commentId, rl_user: userId});
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return [removeDislikeComment];
  };
  