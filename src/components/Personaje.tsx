import { useEffect, useState } from "react";
import { TheSimpson } from "../types";
import Start from "./Start";
import { useAppStore } from "../store";

type PersonajeProps = {
    simpson?: TheSimpson
}

export default function Personaje({simpson}: PersonajeProps) {

    const [isActive, setIsActive] = useState(false)

    const favorites = useAppStore((state) => state.favorites)

    useEffect(() => {
        if (favorites.find(fav => fav.idSimpson === simpson?._id)) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [favorites])

    if(simpson) return (
        <article className="min-h-[460px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
            <div className="relative h-[210px]">
                <Start active={isActive ? true : false} personaje={simpson} />
                
                <img className="absolute mt-3 top-0 left-1/2 -translate-x-1/2 w-44 h-[250px]" src={simpson?.Imagen} alt="" />
            </div>
            <div className="h-[250px] bg-[#181818]">
                <div className="pt-20 px-5">
                    <h1 className="text-white text-2xl mb-1">{ simpson?.Nombre }</h1>
                    <p className="text-white line-clamp-4 first-letter:uppercase">{simpson?.Historia}</p>
                </div>
            </div>
        </article>
    )
}
