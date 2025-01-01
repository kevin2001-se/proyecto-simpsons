import api from "../helper/api";
import { LoginType } from "../types";

export const login = async (formData: LoginType) => {
    try {
        
        const { data } = await api.post('/login', formData);

        console.log(data)

    } catch (error) {
        console.log(error)
    }
} 