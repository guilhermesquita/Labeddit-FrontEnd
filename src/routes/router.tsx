import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Register } from "../pages/register/Register"
import { PostDetail } from "../pages/post-details/PostDetails"

export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/posts/:idPost" element={<PostDetail typePost="post"/>}/>
            <Route path="/comments/:idPost" element={<PostDetail typePost="comment"/>}/>
        </Routes>
    )
}