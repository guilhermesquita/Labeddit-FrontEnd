import { createComment, ICreateCommentForComment, ICreateCommentForPost } from "../service/api";

export const useCreateComment = () => {
  const createNewComment = async (body: ICreateCommentForPost | ICreateCommentForComment) => {
    try {
      const data = await createComment(body);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return [createNewComment];
};
