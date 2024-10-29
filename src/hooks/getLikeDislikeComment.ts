import {
  IListLikeDislikeCommentByCommentAndUser,
  listLikeDislikeCommentByCommentAndUser,
} from "../service/api";

export const useGetLikeDislikeComment = () => {
  const getLikeDislikeComment = async ({
    rl_comment,
    rl_user,
  }: IListLikeDislikeCommentByCommentAndUser) => {
    const likeDislikeList = await listLikeDislikeCommentByCommentAndUser({
      rl_comment,
      rl_user,
    });
    return likeDislikeList?.data;
  };
  return [getLikeDislikeComment];
};
