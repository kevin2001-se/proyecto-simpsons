import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { DataFavorite, Favorite, LoginType, RegisterType, TheSimpson, User } from "./types";
import { getAllPersonajes, getAllPersonajesFavorite, getPersonajeByName, getSimpsonsPrincipal } from "./api/api-simpson";
import { getUserAuth, login, postDeleteFavorite, postRegisterFavorite, postRegisterUser, getFavoritos, postLogout, postRecoverPassword } from './api/api';
import toast from "react-hot-toast";

export type SimsonpsStoreType = {
    theFamilySimpsons: TheSimpson[],
    personajesSearch: TheSimpson[],
    errorMessage: string;
    getFamilySimpson: () => Promise<void>,
    getPersonajeByName: (filtro: string) => Promise<void>,
    postLogin: (data: LoginType) => Promise<void>,
    clearErrorMessage: () => void,
    user: User | null,
    getUser: () => Promise<void>,
    getTokenAuth: string,
    registerUser: (formData: RegisterType) => Promise<void>,
    cerrarSesion: () => void,
    recover_password: (formData: { email: string }) => void,
    page: number,
    hasMore: boolean,
    allPersonaje: TheSimpson[],
    getAllPersonajes: (page: number) => void,
    favorites: Favorite[],
    addFavorites: (personaje: TheSimpson) => void,
    deleteFavorites: (personaje: TheSimpson) => void,
    getFavoritos: () => void,
    getAllFavorites: () => void,
    AllFavorites: TheSimpson[]
}

export const useAppStore = create<SimsonpsStoreType>()(devtools(
    (set, get) => ({
        theFamilySimpsons: [],
        personajesSearch: [],
        errorMessage: "",
        getTokenAuth: localStorage.getItem('authToken') ?? "",
        page: 1,
        allPersonaje: [],
        hasMore: true,
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
        },
        postLogin: async (data) => {
            try {
                const result = await login(data);
                if (result?.user && result?.token) {
                    localStorage.setItem('authToken', result.token)
                    set({
                        getTokenAuth: result.token
                    })
                    toast.success('Bienvenido!!')
                }
            } catch (error) {
                if (error instanceof Error) {
                    set({
                        errorMessage: error.message 
                    })
                }
            }
        },
        clearErrorMessage: () => {
            set({
                errorMessage: ""
            })
        },
        user: null,
        getUser: async () => {
            try {
                const user = await getUserAuth();
                set({
                    user
                })
            } catch (error) {
                toast.error("Ocurrio un error inesperado")
            }
        },
        registerUser: async (formData: RegisterType) => {
            try {
                await postRegisterUser(formData);
                toast.success("Registrado correctamente")
            } catch (error) {
                console.log(error)
                toast.error("Ocurrio un error inesperado")
            }
        },
        cerrarSesion: async () => {
            await postLogout();
            localStorage.removeItem('authToken')
            set({
                user: null,
                getTokenAuth: "",
                favorites: []
            })
        },
        recover_password: async (formData: { email: string }) => {
            try {
                await postRecoverPassword(formData);
                toast.success("Se envio la contraseña a su correo.")
            } catch (error) {
                console.log(error)
                toast.error("Ocurrio un error inesperado")
            }
        },
        getAllPersonajes: async (page: number) => {
            const allPersonajes = await getAllPersonajes(page);
            // Obtenemos solo los personaje principales
            if (allPersonajes?.length === 0) {
                set({
                    hasMore: false
                })
            } else {
                setTimeout(() => {
                    set({
                        allPersonaje: [...get().allPersonaje,...allPersonajes ?? []],
                        page: get().page + 1
                    })
                }, 2000);
            }
        },
        favorites: [],
        addFavorites: async (personaje: TheSimpson) => {

            const formData: DataFavorite = {
                user_id: get().user?.id ?? 0,
                idSimpson: personaje._id,
                json_simpson: JSON.stringify(personaje)
                
            }

            const favorite: Favorite = {
                idSimpson: personaje._id,
                json_simpson: JSON.stringify(personaje)
            }

            const response = await postRegisterFavorite(formData);
            
            if (response) {
                toast.success(response)
    
                set({
                    favorites: [...get().favorites, favorite]
                })
            } else {
                toast.error('Ocurrio un error inesperado')
            }
        },
        deleteFavorites: async (personaje: TheSimpson) => {

            const response = await postDeleteFavorite(personaje._id);

            if (response) {
                toast.success(response)

                const favorites = get().favorites.filter(fav => fav.idSimpson !== personaje._id);
                set({
                    favorites: favorites
                })
            } else {
                toast.error('Ocurrio un error inesperado')
            }
        },
        getFavoritos: async () => {

            const response = await getFavoritos();

            if (response) {
                set({
                    favorites: response.data
                })
            }
        },
        AllFavorites: [],
        getAllFavorites: async () => {
            if (get().favorites) {

                const favorites = get().favorites.map((favorite) => {
                    return JSON.parse(favorite.json_simpson!)
                })

                set({
                    AllFavorites: favorites as TheSimpson[]
                })
            }
        }
    })
)
)