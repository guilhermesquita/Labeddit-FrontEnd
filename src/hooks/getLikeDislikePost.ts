import {
  IListLikeDislikePostByPostAndUser,
  listLikeDislikePostByPostAndUser,
} from "../service/api";

export const useGetLikeDislikePost = () => {
  const getLikeDislikePost = async ({
    rl_post,
    rl_user,
  }: IListLikeDislikePostByPostAndUser) => {
    const likeDislikeList = await listLikeDislikePostByPostAndUser({
      rl_post,
      rl_user,
    });
    return likeDislikeList?.data;
  };
  return [getLikeDislikePost];
};
