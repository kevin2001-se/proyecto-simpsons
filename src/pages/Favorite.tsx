import Personaje from "../components/Personaje";

export default function Favorite() {
  return (
    <>
      <header className="relative w-full bg-[url('/img/portada.png')] bg-cover bg-no-repeat bg-center md:bg-top h-[230px] -mt-6">
          {/* Fondo oscuro */}
          <div className={`absolute top-0 left-0 w-full h-full bg-[#0000005e] pointer-events-none`}></div>
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-white text-stroke-lg text-6xl">FAVORITOS</h1>
          </div>
      </header>
      <div className="max-xl:px-4 mt-14 pb-10 container mx-auto">
          <h1 className="text-3xl mb-9">4 Favorito(s)</h1>
          
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
