import { useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { CardPost } from "../../components/CardPost/CardPost";
import { Box, Button, Divider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetPosts } from "../../hooks/getPosts";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Fonts } from "../../fonts";
import { useGetCommentsByPostComment } from "../../hooks/getCommentsByIdPostComment";
import { useGetComments } from "../../hooks/getCommentsAll";

type typeProps = {
  typePost: string;
};

export const PostDetail = ({ typePost }: typeProps) => {
  const { idPost } = useParams();

  const [post, setPost] = useState<any>();

  const [comments, setComments] = useState<any[]>();

  const [loading, setLoading] = useState(false);

  const [listPosts] = useGetPosts();
  const [listComment] = useGetCommentsByPostComment();
  const [listComments] = useGetComments();

  useEffect(() => {
    console.log(typePost);
    if (typePost === "post") {
      const getPost = async () => {
        const post = await listPosts(idPost);
        if (post instanceof AxiosError) {
          return toast.error("Não foi possível ver os comentários!");
        } else {
          setPost(post);
          const comments = await listComment(idPost as string);
          setComments(comments);
          setLoading(true);
        }
      };
      getPost();
    }
    if (typePost === "comment") {
      const getComment = async () => {
        const comment = await listComments(idPost);
        if (comment instanceof AxiosError) {
          return toast.error("Não foi possível ver os comentários!");
        } else {
          setPost(comment);
          console.log(idPost)
          const comments = await listComment(idPost as string);
          console.log(comments);
          setComments(comments);
          setLoading(true);
        }
      };
      getComment();
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

  if (post === undefined || comments === undefined) {
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
              type: "post",
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
        <Box
          sx={{
            width: "30%",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          {comments
            ? comments.map((comment) => {
                return (
                  <CardPost
                    key={comment.id}
                    post={{
                      id: comment.id,
                      content: comment.content,
                      name_user: comment.name,
                      comments: comment.comments,
                      like: comment.like,
                      type: "comment",
                    }}
                  />
                );
              })
            : null}
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
