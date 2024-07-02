import { useTokenManager } from "../hooks/tokenManager"
import { Login } from "./Login/Login"
import { PostList } from "./post-list/PostList"

export const Home = () => {
    const { getPayload, isTokenValid, setIsTokenValid, tokenAuth } = useTokenManager()

    return (
        <main>
            {isTokenValid === true ? <PostList/> : <Login/>}
        </main>
    )
}