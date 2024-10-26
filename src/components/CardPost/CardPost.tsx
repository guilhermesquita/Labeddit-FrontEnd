import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Fonts } from "../../fonts";
import { LikeIcon } from "../../assets/icons/LikeIcon";
import { DislikeIcon } from "../../assets/icons/dislikeIcon";
import { CommentIcon } from "../../assets/icons/CommentIcon";
import { useNavigate } from "react-router-dom";
import { LikedIcon } from "../../assets/icons/LikedIcon";
import { DislikedIcon } from "../../assets/icons/dislikedIcon";
import { idUser } from "../../service/api";
import { useCreateLikePost } from "../../hooks/createLike";
import { useRemoveLikePost } from "../../hooks/removeLike";
import { useGetLikeDislikePost } from "../../hooks/getLikeDislikePost";

type CardProps = {
  post: {
    id: string;
    name_user: string;
    content: string;
    rl_user: string;
    comments: string;
    like: string;
    type: string;
  };
};

export const CardPost = ({ post }: CardProps) => {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [sendLikePost] = useCreateLikePost();
  const [removeLikePost] = useRemoveLikePost();

  const [getLikeDislikePost] = useGetLikeDislikePost();

  useEffect(() => {
    const handlePopState = () => {
      location.reload();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const listLikesAndDislikes = async () => {
      const userId = idUser as string;
      const likeDislikePost = await getLikeDislikePost({
        rl_post: post.id,
        rl_user: userId,
      });
      if (likeDislikePost.length > 0) {
        if (likeDislikePost[0].like === 1) {
          setLiked(true);
        } else {
          setDisliked(true);
        }
      }
    };
    listLikesAndDislikes();
  }, []);

  const handleLikePostOrComment = async (idPostComment: string) => {
    const userId = idUser as string;
    if (post.type === "post") {
      if (!liked) {
        setLiked(true);
        setDisliked(false);
        await sendLikePost(idPostComment, userId);
      } else {
        setLiked(false);
        await removeLikePost(idPostComment, userId);
      }
    }
  };

  const handleDislikePost = async () => {
    if (!disliked) {
      setDisliked(true);
      setLiked(false);
      // chamar a API
    } else {
      setDisliked(false);
      // chamar a API
    }
  };

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
        {idUser === post.rl_user ? null : (
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
              onClick={() => {
                handleLikePostOrComment(post.id);
              }}
            >
              {liked === true ? <LikedIcon /> : <LikeIcon />}
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
              onClick={() => {
                setDisliked(!disliked);
                setLiked(false);
              }}
            >
              {disliked ? <DislikedIcon /> : <DislikeIcon />}
            </div>
          </Box>
        )}

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
          onClick={() => {
            if (post.type === "post") {
              navigate(`/posts/${post.id}`);
            }
            if (post.type === "comment") {
              navigate(`/comments/${post.id}`);
              location.reload();
            }
          }}
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
