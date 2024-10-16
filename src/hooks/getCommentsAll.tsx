import { getCommentsAll } from "../service/api";

export const useGetComments = () => {
    const listComments = async (id?: string) => {
        const commentList = await getCommentsAll(id)
        return commentList
    }
    return [listComments];
}