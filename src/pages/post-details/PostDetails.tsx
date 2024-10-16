import { useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { CardPost } from "../../components/CardPost/CardPost";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetPosts } from "../../hooks/getPosts";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const PostDetail = () => {
  const { idPost } = useParams();

  const [post, setPost] = useState<any>();

  const [listPosts] = useGetPosts();

  useEffect(() => {
    const getPost = async () => {
      const post = await listPosts(idPost);
      if (post instanceof AxiosError) {
        return toast.error("asas");
      } else {
        setPost(post);
      }
    };
    getPost();
  }, []);

  if(post === undefined) {
    return <h1>carregando...</h1>;
  }

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
      }}
    >
      <Header />
      <Box
        component="section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <CardPost
            post={{
              id: post?.id,
              content: post?.content,
              name_user: post?.name,
              comments: post?.comments,
              like: post?.like,
            }}
          />
        </Box>
      </Box>
    </Box>
    // <Box
    //   component="main"
    //   sx={{
    //     width: "100%",
    //     // border: '1px solid black',
    //   }}
    // >
    //   <Header />
    //   <Box
    //     component="section"
    //     sx={{
    //       width: "100%",
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       paddingTop: "30px",
    //     }}
    //   >
    //     <CardPost
    //       post={{
    //         comments: "12",
    //         content: "balabasldass",
    //         id: 1,
    //         like: "10",
    //         name_user: "guilherme",
    //       }}
    //     />
    //   </Box>
    // </Box>
  );
};
