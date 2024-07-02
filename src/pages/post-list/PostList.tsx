import { useTokenManager } from "../../hooks/tokenManager"

export const PostList = () => {

    const { getPayload, isTokenValid, setIsTokenValid, tokenAuth } = useTokenManager();

    const exitUser = () => {
        alert(isTokenValid)
        setIsTokenValid(false)
    }

    return(
        <button onClick={() => exitUser()}>Home Page</button>
    )
}