import { login } from "../service/api"

export const useLogin = () => {
    const authData = async(email: string, password: string) => {
        try {
            const data = await login(email, password)
            return data 
        } catch (error) {
            console.log(error)
        }
    }

    return [authData]
}  