import { useParams } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { CardPost } from "../../components/CardPost/CardPost";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useGetPosts } from "../../hooks/getPosts";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Fonts } from "../../fonts";
import { useGetCommentsByPostComment } from "../../hooks/getCommentsByIdPostComment";
import { useGetComments } from "../../hooks/getCommentsAll";
import { useForm } from "react-hook-form";
import { useCreateComment } from "../../hooks/createComment";
import { idUser } from "../../service/api";

type TypeProps = {
  typePost: "post" | "comment"; // Tipagem para restringir os valores possíveis de typePost
};

export const PostDetail = ({ typePost }: TypeProps) => {
  const { idPost } = useParams();

  const [post, setPost] = useState<any>();

  const [comments, setComments] = useState<any[]>();

  const [loading, setLoading] = useState(false);

  const [listPosts] = useGetPosts();
  const [listComment] = useGetCommentsByPostComment();
  const [listComments] = useGetComments();

  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting } = formState;

  const [createNewComment] = useCreateComment();

  const createComment = async (data: any) => {
    if (typePost === "post") {
      const createPost = await createNewComment({
        content: data.content,
        rl_post: idPost as string,
        rl_user: idUser as string,
      });
      if (createPost.status === 500) {
        return toast.error(
          "Não foi possível fazer o comentário. Tente novamente mais tarde!"
        );
      }
      reset();
      window.location.reload();
    } else if (typePost === "comment") {
      const createComment = await createNewComment({
        content: data.content,
        rl_comment: idPost as string,
        rl_user: idUser as string,
      });
      if (createComment.status === 500) {
        return toast.error(
          "Não foi possível fazer o comentário. Tente novamente mais tarde!"
        );
      }
      reset();
      window.location.reload();
    } else {
      return toast.error(
        "Não foi possível fazer o comentário. Tente novamente mais tarde!"
      );
    }
  };

  useEffect(() => {
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
          const comments = await listComment(idPost as string);
          setComments(comments);
          setLoading(true);
        }
      };
      getComment();
    }
  }, []);

  if (post === undefined || comments === undefined) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="secondary" size={25} />
      </Box>
    );
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
              rl_user: post?.rl_user,
              comments: post?.comments,
              like: post?.like,
              type: typePost,
            }}
          />
        </Box>
        <FormControl
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
            {...register("content", { required: true })}
            placeholder="Adicionar comentário"
            sx={{
              backgroundColor: "secondary.main",
              borderRadius: "10px",
            }}
          />

          <Button
            variant="contained"
            onClick={() => handleSubmit(createComment)()}
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
            {isSubmitting ? (
              <CircularProgress color="secondary" size={25} />
            ) : (
              "Responder"
            )}
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
        </FormControl>
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
                      rl_user: comment.rl_user,
                      comments: comment.comments,
                      like: comment.like,
                      type: "comment",
                    }}
                  />
                );
              })
            : null}
          {loading ? (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress color="secondary" size={25} />
            </Box>
          ) : null}
          {comments.length === 0 ? (
            <Box
              component="p"
              sx={{
                fontSize: "15px",
                color: "#555555",
                margin: "10px",
                textAlign: "center",
                fontWeight: "regular",
                fontFamily: Fonts ? Fonts.IbmPlexSans : "sans-serif",
                padding: "10px",
              }}
            >
              Seja o primeiro a comentar!
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};
