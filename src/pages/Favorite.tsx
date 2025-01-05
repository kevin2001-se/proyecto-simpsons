import { useEffect } from "react";
import Personaje from "../components/Personaje";
import { useAppStore } from "../store";
import { Navigate } from "react-router";

export default function Favorite() {

  const getAllFavorites = useAppStore((state) => state.getAllFavorites)
  const favorites = useAppStore((state) => state.favorites)
  const AllFavorites = useAppStore((state) => state.AllFavorites)
  const getTokenAuth = useAppStore((state) => state.getTokenAuth)
  const user = useAppStore((state) => state.user)

  useEffect(() => {
    getAllFavorites()
  }, [,favorites])
  
  if (!getTokenAuth && !user) return <Navigate to={'/login'} />

  return (
    <>
      <header className="relative w-full bg-[url('/img/portada.png')] bg-cover bg-no-repeat bg-center md:bg-top h-[230px] -mt-6">
          {/* Fondo oscuro */}
          <div className={`absolute top-0 left-0 w-full h-full bg-[#0000005e] pointer-events-none`}></div>
          <div className="w-full h-full flex justify-center items-center relative">
            <h1 className="text-white text-stroke-lg text-6xl">FAVORITOS</h1>
          </div>
      </header>
      <div className="max-xl:px-4 mt-14 pb-10 container mx-auto">
          <h1 className="text-3xl mb-9">{AllFavorites.length} Favorito(s)</h1>
          
          <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {
                AllFavorites.map(simpson => (
                    <Personaje key={simpson._id} simpson={simpson} />
                ))
              }
          </section>
      </div>
    </>
  )
}
