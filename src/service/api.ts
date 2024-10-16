import axios from "axios"
import { BASE_URL } from "../constant/BASE_URL"
interface IUserRegister {
    email: string;
    password: string;
    name: string
}

interface IUserLogin {
    email: string;
    password: string;
}

export const register = async (user: IUserRegister) => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, user)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response;
        }
        throw new Error("Could not register user");
    }
}

export const login = async (user: IUserLogin) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, user)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response;
        }
        throw new Error("Could not login user");
    }
}

export const getPosts = async(id?: string) => {
    try {
        const response = !id ? await axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
            }
        }) : await axios.get(`${BASE_URL}/posts/?q=${id}`, {
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
            }
        })
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response;
        }
        throw new Error("Could not get posts");
    }
}