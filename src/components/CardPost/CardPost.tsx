import { useEffect } from "react";
import { Box } from "@mui/material";
import { Fonts } from "../../fonts";
import { LikeIcon } from "../../assets/icons/LikeIcon";
import { DislikeIcon } from "../../assets/icons/dislikeIcon";
import { CommentIcon } from "../../assets/icons/CommentIcon";
import { useNavigate } from "react-router-dom";

type CardProps = {
  post: {
    id: number;
    name_user: string;
    content: string;
    comments: string;
    like: string;
    type: string;
  };
};

export const CardPost = ({ post }: CardProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      location.reload(); // Recarrega a página quando voltar no histórico
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <Box
      component={"div"}
      key={post.id}
      sx={{
        margin: "10px 0",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        border: "1px solid #E0E0E0",
        padding: "10px",
        borderRadius: "12px",
        backgroundColor: "#FBFBFB",
      }}
    >
      <Box
        component={"div"}
        // key={post.rl_user}
        sx={{
          fontSize: "10px",
          fontFamily: Fonts ? Fonts.IbmPlexSans : "sans-serif",
          color: "#555555",
          fontWeight: "regular",
        }}
      >
        Enviado por: {post.name_user}
      </Box>
      <Box
        component={"div"}
        key={post.name_user}
        sx={{
          fontSize: "20px",
          fontFamily: Fonts ? Fonts.IbmPlexSans : "sans-serif",
          color: "#000000",
          fontWeight: "500",
        }}
      >
        {post.content}
      </Box>
      <Box
        component={"article"}
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Box
          component={"div"}
          sx={{
            border: "1px solid #E0E0E0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "10px",
            width: "28%",
            height: "30px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              marginTop: "5px",
            }}
          >
            <LikeIcon />
          </div>
          <Box
            component={"p"}
            sx={{
              fontSize: "12px",
              fontFamily: Fonts ? Fonts.IbmPlexSans : "sans-serif",
              fontWeight: "bold",
              color: "#6F6F6F",
            }}
          >
            {post.like}
          </Box>
          <div
            style={{
              marginTop: "5px",
            }}
          >
            <DislikeIcon />
          </div>
        </Box>

        <Box
          sx={{
            border: "1px solid #E0E0E0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "20%",
            height: "30px",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "0.3s",
            ":hover": {
              backgroundColor: "#F2F2F2",
            },
          }}
          onClick={
            () => {
              if (post.type === "post") {
                navigate(`/posts/${post.id}`);
              }
              if (post.type === "comment") {
                navigate(`/comments/${post.id}`);
                location.reload();
              }
            }
          }
        >
          <div
            style={{
              marginTop: "5px",
            }}
          >
            <CommentIcon />
          </div>
          <Box
            component={"p"}
            sx={{
              fontSize: "12px",
              fontFamily: Fonts ? Fonts.IbmPlexSans : "sans-serif",
              color: "#6F6F6F",
            }}
          >
            {post.comments}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
