import { z } from "zod";
import { TheSimpsonsResponseSchema } from "../utils/data-schemas";

export type LoginType = {
    email: string;
    password: string;
}

// Types the simpson
export type TheSimpson = z.infer<typeof TheSimpsonsResponseSchema>;