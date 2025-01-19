import { z } from "zod";

export const TheSimpsonsResponseSchema = z.object({
    _id: z.string(),
    Nombre: z.string(),
    Imagen: z.string(),
    Historia: z.string()
})

export const TheSimpsonsFindResponseSchema = z.object({
    result: z.array(TheSimpsonsResponseSchema)
})


export const TheSimpsonsAllResponseSchema = z.object({
    docs: z.array(TheSimpsonsResponseSchema)
})
// Schema para authenticación
export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
})

export const AuthUserSchema = z.object({
    message: z.string(),
    token: z.string().nullable(),
    user: UserSchema.nullable()
})

// Schema para authenticación
export const FavoriteSchema = z.object({
    idSimpson: z.string(),
    json_simpson: z.string().nullable(),
})