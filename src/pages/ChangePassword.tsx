import { Link } from "react-router";

export default function ChangePassword() {
  return (
    <div className="flex-1 flex justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center sm:w-[613px] gap-5">
        <h1 className="text-5xl text-center">CAMBIAR CONTRASEÑA</h1>

        <input type="password" name="password" placeholder="Contraseña" className="w-full border-4 border-black p-5 rounded-lg text-xl outline-none placeholder:text-black" />

        <input type="password" name="recover-password"  placeholder="Repetir Contraseña" className="w-full border-4 border-black p-5 rounded-lg text-xl outline-none placeholder:text-black" />

        <button type="submit" className="w-[306px] border-4 border-black py-3 rounded-lg text-2xl hover:bg-black hover:text-white hover:transition-colors transition-colors">ACTUALIZAR</button>

        <p className="text-xl"><Link to={'/login'}>Iniciar sesión</Link></p>
      </div>
    </div>
  )
}
