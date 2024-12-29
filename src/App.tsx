import Personaje from "./components/Personaje";

export default function App() {
  return (
    <>
        <header className="relative w-full bg-[url('/img/portada.png')] bg-cover bg-no-repeat bg-center md:bg-top h-[520px] -mt-6">
            {/* Fondo oscuro */}
            <div className={`absolute top-0 left-0 w-full h-full bg-[#0000005e] pointer-events-none`}></div>
            <form className="w-full h-full flex justify-center items-center">
                <input type="text" placeholder="Buscar y presionar Enter" className="w-[300px] md:w-[450px] relative border-4 border-black p-4 outline-none rounded-lg text-2xl" />
            </form>
        </header>
        <div className="max-xl:px-4 mt-14 pb-10 container mx-auto">
            <h1 className="text-center text-5xl mb-9">PERSONAJES PRINCIPALES</h1>

            <section className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
                <Personaje />
                <Personaje />
                <Personaje />
                <Personaje />
            </section>
        </div>
    </>
  )
}
