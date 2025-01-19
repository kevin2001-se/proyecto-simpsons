import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";
import { useAppStore } from "../store";

export default function Navbar() {

    const navigate = useNavigate();

    const getUser = useAppStore((state) => state.getUser)
    const getTokenAuth = useAppStore((state) => state.getTokenAuth)
    const user = useAppStore((state) => state.user)
    const cerrarSesion = useAppStore((state) => state.cerrarSesion)
    const getFavoritos = useAppStore((state) => state.getFavoritos)

    useEffect(() => {
      setTimeout(async () => {
        if (!user && getTokenAuth) {
            await getUser();
            await getFavoritos();
        }
      });
    }, [,getTokenAuth])

    const [openMenu, setOpenMenu] = useState(false)

    const handleCerrarSesion = async () => {
        await cerrarSesion();
        navigate('/login')
    }

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
                        <Link to="/"><img className="w-full" src="/img/the-simpsoms.png" alt="" /></Link>
                    </div>
                    <div className="hidden md:block"></div>
                </div>
            </nav>
            <div className={`fixed top-0 ${openMenu === false ? 'left-[-4000px] transition-all duration-150' : 'left-0 transition-all duration-150'} w-full sm:w-[500px] h-screen bg-[#FFE100] z-30 sm:rounded-br-[260px] pt-14`}>

                <button type="button" className="absolute top-4 right-4" onClick={() => setOpenMenu(!openMenu)}>
                    <CgClose className="text-3xl" />
                </button>

                <h1 className="text-5xl font-bold text-center">{
                    user ? `Hola, ${user.name}` : "MENÚ"    
                }</h1>

                <div className="h-[70%] flex items-center">
                    <ul className="w-full text-5xl font-bold flex flex-col items-center gap-6 text-center">
                        <li>
                            <NavLink to={'/'} 
                                className={({isActive}) => isActive ? 'text-black' : 'text-stroke-sm text-white' }>
                                INICIO
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/allPersonajes'} 
                                className={({isActive}) => isActive ? 'text-black' : 'text-stroke-sm text-white' }>
                                PERSONAJES
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/favorite'} 
                                className={({isActive}) => isActive ? 'text-black' : 'text-stroke-sm text-white' }>
                                FAVORITOS
                            </NavLink>
                        </li>
                        {
                            user ? (
                                <li>
                                    <button type="button" onClick={handleCerrarSesion} className="text-stroke-sm text-white">CERRAR SESION</button>
                                </li>
                            ) : (
                                <li>
                                    <NavLink to={'/login'} 
                                        className={({isActive}) => isActive ? 'text-black' : 'text-stroke-sm text-white' }>
                                        INICIAR SESION
                                    </NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>

            {/* Fondo oscuro */}
            <div className={`absolute ${openMenu === false ? 'hidden' : 'block'} top-0 left-0 w-full h-full bg-[#000000a1] z-20`}  onClick={() => setOpenMenu(!openMenu)}></div>
        </>
    )
}
