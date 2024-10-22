import { Box } from "@mui/material";
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
    return <h1>carregando...</h1>;
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
