import axios from "axios"
import { BASE_URL } from "../constant/BASE_URL"

// export const createUser = async () => {
//     try {
//         // const {name, email, password}
//         const response = await axios.post(`${BASE_URL}/users`)
//     } catch (error) {
        
//     }
// }

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {email, password})
        return response.data
    } catch (error) {
        console.log(error)
    }
}