import axios from "axios";
import { BASE_URL } from "../constant/BASE_URL";
import { getIdByToken } from "../utils/decodeToken";

interface IUserRegister {
  email: string;
  password: string;
  name: string;
}

interface IUserLogin {
  email: string;
  password: string;
}

interface ICreateAndDeleteLikePost {
  rl_post: string;
  rl_user: string;
}

interface ICreateAndDeleteLikeComment {
  rl_comment: string;
  rl_user: string;
}

export interface IListLikeDislikePostByPostAndUser {
  rl_post: string;
  rl_user: string;
}

export interface IListLikeDislikeCommentByCommentAndUser {
  rl_comment: string;
  rl_user: string;
}

export interface ICreateCommentForPost{
  rl_post: string;
  rl_user: string;
  content: string;
}

export interface ICreateCommentForComment{
  rl_comment: string;
  rl_user: string;
  content: string;
}

export const idUser = await getIdByToken();

//AUTH
export const register = async (user: IUserRegister) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, user);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not register user");
  }
};

export const login = async (user: IUserLogin) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, user);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not login user");
  }
};

//Posts e comentários
export const getPosts = async (id?: string) => {
  try {
    const response = !id
      ? await axios.get(`${BASE_URL}/posts`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
      : await axios.get(`${BASE_URL}/posts/?q=${id}`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not get posts");
  }
};

export const getCommentsAll = async (id?: string) => {
  try {
    const response = !id
      ? await axios.get(`${BASE_URL}/comments`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
      : await axios.get(`${BASE_URL}/comments?q=${id}`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not get posts");
  }
};

export const getCommentsByPostCommentId = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/comments/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not get posts");
  }
};

export const createPost = async (content: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/posts`,
      {
        content: content,
        rl_user: idUser,
      },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not get posts");
  }
};

export const createComment = async (body: ICreateCommentForPost | ICreateCommentForComment) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/comments`,
      body,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not get comments");
  }
};

//Likes e dislikes
export const createLikePost = async (body: ICreateAndDeleteLikePost) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/likes-dislikes/like/posts`,
      body,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not like post");
  }
};

export const deleteLikePost = async (body: ICreateAndDeleteLikePost) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/likes-dislikes/like/posts`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
        data: body,
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not delete like on post");
  }
};

//Likes e dislikes
export const createDislikePost = async (body: ICreateAndDeleteLikePost) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/likes-dislikes/dislike/posts`,
      body,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not dislike post");
  }
};

export const deleteDislikePost = async (body: ICreateAndDeleteLikePost) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/likes-dislikes/dislike/posts`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
        data: body,
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not delete dislike on post");
  }
};

export const listLikeDislikePostByPostAndUser = async ({
  rl_post,
  rl_user,
}: IListLikeDislikePostByPostAndUser) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/likes-dislikes/like/dislike/post/${rl_post}/${rl_user}`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not delete like on post");
  }
};

export const createLikeComment = async (body: ICreateAndDeleteLikeComment) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/likes-dislikes/like/comments`,
      body,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not like post");
  }
};

export const deleteLikeComment = async (body: ICreateAndDeleteLikeComment) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/likes-dislikes/like/comments`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
        data: body,
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not delete like on post");
  }
};

export const createDislikeComment = async (
  body: ICreateAndDeleteLikeComment
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/likes-dislikes/dislike/comments`,
      body,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not like post");
  }
};

export const deleteDislikeComment = async (
  body: ICreateAndDeleteLikeComment
) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/likes-dislikes/dislike/comments`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
        data: body,
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not delete like on post");
  }
};

export const listLikeDislikeCommentByCommentAndUser = async ({
  rl_comment,
  rl_user,
}: IListLikeDislikeCommentByCommentAndUser) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/likes-dislikes/like/dislike/comment/${rl_comment}/${rl_user}`,
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
    throw new Error("Could not delete like on post");
  }
};
