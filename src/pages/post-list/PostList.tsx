import { Header } from "../../components/header/Header";
import { Box } from "@mui/material";
import { NewPostForm } from "../../components/createPost/CreatePostForm";

export const PostList = () => {

    return (
        <Box component='main' sx={{
            width: '100%',
            // border: '1px solid black',
        }}>
            <Header />
            <Box component='section' sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '30px',
            }}>
                <NewPostForm/>
            </Box>
        </Box>
    )
}