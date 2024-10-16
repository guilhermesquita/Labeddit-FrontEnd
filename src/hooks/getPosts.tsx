import { getPosts } from "../service/api";

export const useGetPosts = () => {
    const listPosts = async (id?: string) => {
        const postList = await getPosts(id)
        return postList
    }
    return [listPosts];
}