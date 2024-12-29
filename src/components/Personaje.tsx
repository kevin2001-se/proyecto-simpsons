import Start from "./Start";

export default function Personaje() {
  return (
    <article className="min-h-[460px] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
        <div className="relative h-[210px]">
            <button type='button' className="absolute top-4 right-4">
                <Start />
            </button>
            <img className="absolute mt-3 top-0 left-1/2 -translate-x-1/2" src="img/homero.png" alt="" />
        </div>
        <div className="h-[250px] bg-[#181818]">
            <div className="pt-28 px-5">
                <h1 className="text-white text-2xl mb-1">Homero Simpson</h1>
                <p className="text-white">Shoplifting is a victimless crime, like punching someone in the dark.</p>
            </div>
        </div>
    </article>
  )
}
