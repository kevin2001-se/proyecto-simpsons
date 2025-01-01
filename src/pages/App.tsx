import { useEffect } from "react";
import Personaje from "../components/Personaje";
import { useAppStore } from "../store";
import FormSearch from "../components/FormSearch";

export default function App() {

    const getFamilySimpson = useAppStore((state) => state.getFamilySimpson);
    const theFamilySimpsons = useAppStore((state) => state.theFamilySimpsons);

    useEffect(() => {
        getFamilySimpson();
    }, [])
    
    return (
        <>
            <header className="relative w-full bg-[url('/img/portada.png')] bg-cover bg-no-repeat bg-center md:bg-top h-[520px] -mt-6">
                {/* Fondo oscuro */}
                <div className={`absolute top-0 left-0 w-full h-full bg-[#0000005e] pointer-events-none`}></div>
                
                <FormSearch />
            </header>
            <div className="max-xl:px-4 mt-14 pb-10 container mx-auto">
                <h1 className="text-center text-5xl mb-9">PERSONAJES PRINCIPALES</h1>

                <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        theFamilySimpsons.map(simpson => (
                            <Personaje key={simpson._id} simpson={simpson} />
                        ))
                    }
                </section>
            </div>
        </>
    )
}
