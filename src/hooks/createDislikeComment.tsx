import { createDislikeComment } from "../service/api";

export const useCreateDislikeComment = () => {
    const sendDislikeComment = async (commentId: string, userId: string) => {
      try {
        const data = await createDislikeComment({rl_comment: commentId, rl_user: userId});
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    return [sendDislikeComment];
  };
  