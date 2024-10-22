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

const idUser = await getIdByToken();

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
    const response = await axios.post(`${BASE_URL}/posts`, {
      "content": content,
      "rl_user": idUser,
    }, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(idUser);
      return error.response;
    }
    throw new Error("Could not get posts");
  }
};

