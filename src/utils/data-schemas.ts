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