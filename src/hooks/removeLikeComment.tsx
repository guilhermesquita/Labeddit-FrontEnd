import { deleteLikeComment } from "../service/api";

export const useRemoveLikeComment = () => {
    const removeLikeComment = async (commentId: string, userId: string) => {
      try {
        const data = await deleteLikeComment({rl_comment: commentId, rl_user: userId});
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return [removeLikeComment];
  };
  