import { isAxiosError } from "axios";
import api from "../helper/api";
import { DataFavorite, LoginType, RegisterType } from "../types";
import { AuthUserSchema, UserSchema } from "../utils/data-schemas";

export const login = async (formData: LoginType) => {
    try {
        
        const { data } = await api.post('/login', formData);

        const result = AuthUserSchema.safeParse(data);

        if (result.success) {
            return result.data;
        }

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
} 

export const getUserAuth = async () => {
    try {
        
        const { data } = await api.get('/user');

        const result = UserSchema.safeParse(data);

        if (result.success) {
            return result.data;
        }

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
} 

export const postRegisterUser = async (formData: RegisterType) => {
    try {
        
        const { data } = await api.post('/register', formData);

        return data.message;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
} 

export const getFavoritos = async (user_id: number) => {
    try {
        
        const { data } = await api.get(`/favorites/${user_id}`);

        return data;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
}

export const postRegisterFavorite = async (formData: DataFavorite) => {
    try {
        
        const { data } = await api.post('/favorites', formData);

        return data.message;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
} 

export const postDeleteFavorite = async (formData: DataFavorite) => {
    try {
        
        const { data } = await api.post('/favoritesDelete', formData);

        return data.message;

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.message)
        }
    }
} 