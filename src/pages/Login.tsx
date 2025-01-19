import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { LoginType } from "../types";
import ErrorForm from "../components/ErrorForm";
import { useAppStore } from "../store";
import { useEffect, useMemo } from "react";
import { Navigate } from "react-router";
import toast from "react-hot-toast";

const inialtValues: LoginType = {
  email: "",
  password: ""
}

export default function Login() {

  const getTokenAuth = useAppStore((state) => state.getTokenAuth);
  const postLogin = useAppStore((state) => state.postLogin);
  const errorMessage = useAppStore((state) => state.errorMessage);
  const clearErrorMessage = useAppStore((state) => state.clearErrorMessage);

  const existsLoginTrue = useMemo(() => getTokenAuth && getTokenAuth.length > 0 , [getTokenAuth])

  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: inialtValues})

  const handleLoginUser = async (formData: LoginType) => {
    await postLogin(formData);
  }

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      clearErrorMessage();
    }
  }, [errorMessage])
  
  if(existsLoginTrue) return <Navigate to={'/'} />

  return (
    <div className="flex-1 flex justify-center items-center p-4">
      <form onSubmit={handleSubmit(handleLoginUser)} className="flex flex-col justify-center items-center sm:w-[613px] gap-5" noValidate>
        <h1 className="text-5xl text-center">INICIAR SESION</h1>
        {/* email */}
        <div className="w-full flex flex-col gap-1">
          <input 
            type="email" 
            placeholder="Correo Electronico" 
            className="w-full border-4 border-black p-5 rounded-lg text-xl outline-none placeholder:text-black" 
            {
              ...register("email", {
                required: "El correo electronico es obligatorio.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Correo Electronico no válido",
                }
              })
            }
          />
          {
            errors.email && (
              <ErrorForm>{ errors.email.message }</ErrorForm>
            )
          }
        </div>
        {/* Contraseña */}
        <div className="w-full flex flex-col gap-1">
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="w-full border-4 border-black p-5 rounded-lg text-xl outline-none placeholder:text-black" 
            {
              ...register("password", {
                required: "La contraseña es obligatoria.",
                minLength: {
                  value: 8,
                  message: "Repetir contraseña debe tener como mínimo 8 caracteres."
                },
              })
            }
          />
          {
            errors.password && (
              <ErrorForm>{ errors.password.message }</ErrorForm>
            )
          }
        </div>

        <button type="submit" className="w-[306px] border-4 border-black py-3 rounded-lg text-2xl hover:bg-black hover:text-white hover:transition-colors transition-colors">INGRESAR</button>
        <p className="text-xl">No tienes cuenta, <Link to={'/register'}>Registrarme</Link></p>
        <p className="text-xl"><Link to={'/recover-password'}>Recuperar Contraseña</Link></p>
      </form>
    </div>
  )
}
