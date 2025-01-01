import axios from "axios"
import { TheSimpsonsFindResponseSchema } from "../utils/data-schemas";

export const getSimpsonsPrincipal = async () => {
    try {
        
        const url = `${import.meta.env.VITE_API_SIMPSONS}/find/simpson`;
        const { data } = await axios.get(url)
        const result = TheSimpsonsFindResponseSchema.safeParse(data);
        if (result.success) {
            return result.data.result;
        }

    } catch (error) {
        console.log(error)
    }
}

export const getPersonajeByName = async (filtro: string) => {
    try {
        
        const url = `${import.meta.env.VITE_API_SIMPSONS}/find/${filtro}`;
        const { data } = await axios.get(url)
        const result = TheSimpsonsFindResponseSchema.safeParse(data);
        if (result.success) {
            return result.data.result;
        }

    } catch (error) {
        console.log(error)
    }
}