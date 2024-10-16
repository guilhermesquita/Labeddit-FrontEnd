import { register } from "../service/api"

export const useRegister = () => {
    const registerData = async(email: string, password: string, name: string) => {
        try {
            const body = {
                email,
                password,
                name
            }
            const data = await register(body)
            return data 
        } catch (error) {
            console.log(error)
        }
    }

    return [registerData]
}  