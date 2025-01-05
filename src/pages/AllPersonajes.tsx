import { useEffect, useRef } from "react";
import FormSearch from "../components/FormSearch";
import Personaje from "../components/Personaje";
import { useAppStore } from "../store";

export default function AllPersonajes() {

  const getAllPersonajes = useAppStore((state) => state.getAllPersonajes);
  const allPersonaje = useAppStore((state) => state.allPersonaje);
  const hasMore = useAppStore((state) => state.hasMore);
  const page = useAppStore((state) => state.page);
  
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(OnIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    }
  }, [allPersonaje])

  const OnIntersection: IntersectionObserverCallback = async (entries) => {
    const firstEntries = entries[0];
    if (firstEntries.isIntersecting && hasMore) {
      await getAllPersonajes(page);
    }
  } 

  return (
    <div>
      <header className="relative w-full bg-[url('/img/portada.png')] bg-cover bg-no-repeat bg-center md:bg-top h-[230px] -mt-6">
          {/* Fondo oscuro */}
          <div className={`absolute top-0 left-0 w-full h-full bg-[#0000005e] pointer-events-none`}></div>
          <FormSearch />
      </header>
      <div className="max-xl:px-4 mt-14 pb-10 container mx-auto">
          
          <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {
              allPersonaje.map(simpson => (
                <Personaje key={simpson._id} simpson={simpson} />
              ))
            }
          </section>

          { hasMore && <p ref={elementRef} className="w-full text-center pt-8" >Cargando...</p> }
      </div>
    </div>
  )
}
