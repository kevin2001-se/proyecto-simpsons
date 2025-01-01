import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { TheSimpson } from "./types";
import { getPersonajeByName, getSimpsonsPrincipal } from "./api/api-simpson";

export type SimsonpsStoreType = {
    theFamilySimpsons: TheSimpson[],
    personajesSearch: TheSimpson[],
    getFamilySimpson: () => Promise<void>,
    getPersonajeByName: (filtro: string) => Promise<void>,
}

export const useAppStore = create<SimsonpsStoreType>()(devtools(
    (set) => ({
        theFamilySimpsons: [],
        personajesSearch: [],
        getFamilySimpson: async () => { // Obtener la familia simpson
            const data = await getSimpsonsPrincipal();
            // Obtenemos solo los personaje principales
            const TheSimpson = ['Bart Simpson', 'Homero Simpson', 'Marge Simpson', 'Lisa Simpson', 'Maggie Simpson']
            const theFamilySimpsons = data?.filter(dato => TheSimpson.includes(dato.Nombre))
            set({
                theFamilySimpsons
            })
        },
        getPersonajeByName: async (filtro) => {
            const data = await getPersonajeByName(filtro);
            set({
                personajesSearch: data
            })
        }
    })
)
)