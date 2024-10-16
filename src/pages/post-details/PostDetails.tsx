import { useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { CardPost } from "../../components/CardPost/CardPost";
import { Box, Button, Divider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetPosts } from "../../hooks/getPosts";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Fonts } from "../../fonts";

type typeProps = {
  typePost: string
}

export const PostDetail = ({typePost}: typeProps) => {
  const { idPost } = useParams();

  const [post, setPost] = useState<any>();

  const [listPosts] = useGetPosts();

  useEffect(() => {
    if(typePost === "post") {
      const getPost = async () => {
        const post = await listPosts(idPost);
        if (post instanceof AxiosError) {
          return toast.error("asas");
        } else {
          setPost(post);
        }
      };
      getPost();
    }
    // const getPost = async () => {
    //   const post = await listPosts(idPost);
    //   if (post instanceof AxiosError) {
    //     return toast.error("asas");
    //   } else {
    //     setPost(post);
    //   }
    // };
    // getPost();
  }, []);

  if (post === undefined) {
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
              type: 'post'
            }}
          />
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <TextField
            multiline
            rows={4}
            fullWidth
            placeholder="Adicionar comentário"
            sx={{
              backgroundColor: "secondary.main",
              borderRadius: "10px",
            }}
          />

          <Button
            variant="contained"
            // onClick={() => handleSubmit(onSubmit)()}
            sx={{
              color: "white",
              width: { xs: "90%", md: "280px", lg: "100%" },
              fontFamily: Fonts ? Fonts.NotoSans : "sans-serif",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: "bold",
              transition: "0.4s",
            }}
          >
            {/* {isSubmitting ? <CircularProgress color="secondary" size={25} /> : 'Entrar'} */}
            Responder
          </Button>
          <Divider
          sx={{

            borderBottomWidth: 2,
            marginTop: "10px",
            marginBottom: "20px",
            borderColor: "primary.main",
            width: "100%",
          }}
        ></Divider>
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
