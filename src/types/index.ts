import { z } from "zod";
import { AuthUserSchema, FavoriteSchema, TheSimpsonsResponseSchema, UserSchema } from "../utils/data-schemas";

export type LoginType = {
    email: string;
    password: string;
}

export type RegisterType = LoginType & {
    name: string;
    password_confirmation: string;
} 

export type DataFavorite = {
    user_id: number;
    idSimpson: string;
    json_simpson?: string;
}

// Types the simpson
export type TheSimpson = z.infer<typeof TheSimpsonsResponseSchema>;
export type AuthUser = z.infer<typeof AuthUserSchema>
export type User = z.infer<typeof UserSchema>
export type Favorite = z.infer<typeof FavoriteSchema>