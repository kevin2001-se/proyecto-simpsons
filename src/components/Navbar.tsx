import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <nav className="sticky top-0 bg-[#FFE100] px-4 py-2 rounded-b-2xl md:rounded-b-3xl drop-shadow-xl z-20">
                <div className="container mx-auto flex justify-between">
                    <div className="max-md:order-2 flex items-center">
                        <button type="button" onClick={() => setOpenMenu(!openMenu)}>
                            <FaBars className="text-3xl md:text-4xl cursor-pointer"  />
                        </button>
                    </div>
                    <div className="w-32 md:w-40 lg:w-48 max-md:order-1">
                        <img className="w-full" src="img/the-simpsoms.png" alt="" />
                    </div>
                    <div className="hidden md:block"></div>
                </div>
            </nav>
            <div className={`fixed top-0 ${openMenu === false ? 'left-[-4000px] transition-all duration-150' : 'left-0 transition-all duration-150'} w-full sm:w-[500px] h-screen bg-[#FFE100] z-30 sm:rounded-br-[260px] pt-14`}>

                <button type="button" className="absolute top-4 right-4" onClick={() => setOpenMenu(!openMenu)}>
                    <CgClose className="text-3xl" />
                </button>

                <h1 className="text-5xl font-bold text-center">MENÚ</h1>

                <div className="h-[70%] flex items-center">
                    <ul className="w-full text-5xl font-bold flex flex-col items-center gap-6 text-center">
                        <li><a href="" className="text-black">INICIO</a></li>
                        <li><a href="" className="text-stroke-sm text-white">FAVORITOS</a></li>
                        <li><a href="" className="text-stroke-sm text-white">INICIAR SESION</a></li>
                    </ul>
                </div>
            </div>

            {/* Fondo oscuro */}
            <div className={`absolute ${openMenu === false ? 'hidden' : 'block'} top-0 left-0 w-full h-full bg-[#000000a1] z-20`}  onClick={() => setOpenMenu(!openMenu)}></div>
        </>
    )
}