import { useContext } from "react";
import { Context } from "../../store/AuthContext/AuthContext";

export const PostList = () => {
    const auth = useContext(Context)
    const exitUser = () => {
        auth?.setAuthenticated(false)
    }
    return(
        <button onClick={() => exitUser()}>loggout</button>
    )
}