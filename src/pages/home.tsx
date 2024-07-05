import { useContext, useEffect } from "react"
import { Login } from "./Login/Login"
import { PostList } from "./post-list/PostList"
import { Context } from "../store/AuthContext/AuthContext"

export const Home = () => {
    const auth = useContext(Context)

    useEffect(() => {
        async () => {
            const token = localStorage.getItem('token') as string
            if (token) {
                await auth?.getPayload(token)
            }
        }
    }, [])

    return (
        <main>
            {auth?.authenticated === true ? <PostList /> : <Login />}
        </main>
    )
}