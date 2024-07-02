import { login } from "../service/api"

export const useLogin = () => {
    const authData = async(email: string, password: string) => {
        try {
            const body = {
                email,
                password
            }
            const data = await login(body)
            return data 
        } catch (error) {
            console.log(error)
        }
    }

    return [authData]
}  