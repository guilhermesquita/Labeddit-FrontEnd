import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetPosts } from "../../hooks/getPosts";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { CardPost } from "../CardPost/CardPost";

export const Post = () => {
  const [listPosts] = useGetPosts();
  const [posts, setPosts] = useState<any[] | undefined>();

  useEffect(() => {
    const getPosts = async () => {
      const post = await listPosts();
      if (post instanceof AxiosError) {
        return toast.error("asas");
      } else {
        setPosts(post);
      }
    };
    getPosts();
  });

  if (posts === undefined) {
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
      sx={{
        width: "30%",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      {posts.map((post) => {
        return (
          <CardPost
            key={post.id}
            post={{
              id: post.id,
              content: post.content,
              name_user: post.name,
              rl_user: post.rl_user,
              comments: post.comments,
              like: post.like,
              type: "post",
            }}
          />
        );
      })}
    </Box>
  );
};
