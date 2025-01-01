import { Navigate, useLocation } from "react-router";
import FormSearch from "../components/FormSearch";
import Personaje from "../components/Personaje";
import { useAppStore } from "../store";
import { useEffect } from "react";

export default function Search() {

  // Obtener el query param
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const paramPersonaje = queryParam.get('personaje');

  if (!paramPersonaje) return <Navigate to={'/'} />;

  const getPersonajeByName = useAppStore((state) => state.getPersonajeByName);
  const personajesSearch = useAppStore((state) => state.personajesSearch);

  useEffect(() => {
    getPersonajeByName(paramPersonaje);
  }, [,paramPersonaje])

  return (
    <>
        <header className="relative w-full bg-[url('/img/portada.png')] bg-cover bg-no-repeat bg-center md:bg-top h-[230px] -mt-6">
            {/* Fondo oscuro */}
            <div className={`absolute top-0 left-0 w-full h-full bg-[#0000005e] pointer-events-none`}></div>
            <FormSearch />
        </header>
        <div className="max-xl:px-4 mt-14 pb-10 container mx-auto">
            <h1 className="text-3xl mb-9">{personajesSearch.length} Resultados con '{paramPersonaje}'</h1>
            
            <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {
                personajesSearch.map(simpson => (
                  <Personaje key={simpson._id} simpson={simpson} />
                ))
              }
            </section>
        </div>
    </>
  )
}
