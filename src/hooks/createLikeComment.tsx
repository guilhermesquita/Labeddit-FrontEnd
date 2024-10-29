import { createLikeComment } from "../service/api";

export const useCreateLikeComment = () => {
    const sendLikeComment = async (commentId: string, userId: string) => {
      try {
        const data = await createLikeComment({rl_comment: commentId, rl_user: userId});
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return [sendLikeComment];
  };
  