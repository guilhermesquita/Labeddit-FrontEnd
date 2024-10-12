import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetPosts } from "../../hooks/getPosts";
import { AxiosError } from "axios";
import { toast, ToastContainer } from "react-toastify";

export const Post = () => {
  const [listPosts] = useGetPosts();
  const [posts, setPosts] = useState<any[] | undefined>();

  useEffect(() => {
    const teste = async () => {
      const post = await listPosts();
      console.log(post);
      if (post instanceof AxiosError) {
        return toast.error("asas");
      } else {
        setPosts(post);
      }
    };
    teste();
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
          <Box
            key={post.id}
          >
            enviado por: {post.rl_user}
            {post.content}
          </Box>
        );
      })}
    </Box>
  );
};
