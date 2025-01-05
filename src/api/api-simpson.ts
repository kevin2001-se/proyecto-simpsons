import axios from "axios"
import { TheSimpsonsAllResponseSchema, TheSimpsonsFindResponseSchema } from "../utils/data-schemas";

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

export const getAllPersonajes = async (page: number) => {
    try {
        
        const url = `${import.meta.env.VITE_API_SIMPSONS}?limit=20&page=${page}`;
        const { data } = await axios.get(url)
        const result = TheSimpsonsAllResponseSchema.safeParse(data);
        if (result.success) {
            return result.data.docs;
        }

    } catch (error) {
        console.log(error)
    }
}

export const getAllPersonajesFavorite = async () => {
    try {
        
        const url = `${import.meta.env.VITE_API_SIMPSONS}?limit=676`;
        const { data } = await axios.get(url)
        const result = TheSimpsonsAllResponseSchema.safeParse(data);
        if (result.success) {
            return result.data.docs;
        }

    } catch (error) {
        console.log(error)
    }
}