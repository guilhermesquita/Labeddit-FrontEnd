import { getPosts } from "../service/api";

export const useGetPosts = () => {
    const listPosts = async () => {
        const postList = await getPosts()
        return postList
    }
    return [listPosts];
}