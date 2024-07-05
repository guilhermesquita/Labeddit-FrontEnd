import { useContext, useEffect } from "react";
import { Context } from "../../store/AuthContext/AuthContext";

export const PostList = () => {
    const auth = useContext(Context)
    const exitUser = () => {
        auth?.setAuthenticated(false)
        localStorage.removeItem('token')
    }

    return(
        <button onClick={() => exitUser()}>loggout</button>
    )
}