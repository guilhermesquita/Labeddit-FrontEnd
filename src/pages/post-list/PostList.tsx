import { useContext } from "react";
import { Context } from "../../store/AuthContext/AuthContext";
import { Header } from "../../components/header/Header";
import { Box } from "@mui/material";

export const PostList = () => {
    const auth = useContext(Context)
    const exitUser = () => {
        auth?.setAuthenticated(false)
        localStorage.removeItem('token')
    }

    return (
        <Box component='main' sx={{
            width: '100%',
            // border: '1px solid black',
        }}>
            <Header/>
        </Box>
    )
}