import { getCommentsByPostCommentId } from "../service/api";

export const useGetCommentsByPostComment = () => {
    const listComment = async (id: string) => {
        const commentList = await getCommentsByPostCommentId(id)
        return commentList
    }
    return [listComment];
}