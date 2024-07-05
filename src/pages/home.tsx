import { useContext } from "react"
import { useTokenManager } from "../hooks/tokenManager"
import { Login } from "./Login/Login"
import { PostList } from "./post-list/PostList"
import { Context } from "../store/AuthContext/AuthContext"

export const Home = () => {
    const auht = useContext(Context)

    return (
        <main>
            {auht?.authenticated === true ? <PostList/> : <Login/>}
        </main>
    )
}