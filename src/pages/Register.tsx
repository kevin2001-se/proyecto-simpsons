import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { RegisterType } from "../types";
import ErrorForm from "../components/ErrorForm";
import { useAppStore } from "../store";

const initialValues: RegisterType = { 
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
}

export default function Register() {

  const navigate = useNavigate();

  const registerUser = useAppStore((state) => state.registerUser)

  const { register, handleSubmit, formState: { errors }, getValues } = useForm({defaultValues: initialValues})

  const handleRegister = (formData: RegisterType) => {
    registerUser(formData)
    navigate('/login')
  }

  return (
    <div className="flex-1 flex justify-center items-center p-4">
      <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col justify-center items-center sm:w-[613px] gap-5">
        <h1 className="text-5xl text-center">REGISTRARME</h1>

        <div className="w-full">
          <input 
            type="text" 
            placeholder="Usuario" 
            className="w-full border-4 border-black p-5 rounded-lg text-xl outline-none placeholder:text-black"
            {
              ...register('name', {
                required: "El usuario es obligatorio",
              })
            }
          />
          {
            errors.email && (
              <ErrorForm>{ errors.email.message }</ErrorForm>
            )
          }
        </div>
        
        <div className="w-full">
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

        <div className="w-full">
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="w-full border-4 border-black p-5 rounded-lg text-xl outline-none placeholder:text-black" 
            {
              ...register("password", {
                required: "La contraseña es obligatoria.",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener como mínimo 8 caracteres."
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
        
        <div className="w-full">
          <input 
            type="password" 
            placeholder="Repetir Contraseña" 
            className="w-full border-4 border-black p-5 rounded-lg text-xl outline-none placeholder:text-black" 
            {
              ...register("password_confirmation", {
                required: "Repetir contraseña es obligatoria.",
                minLength: {
                  value: 8,
                  message: "Repetir contraseña debe tener como mínimo 8 caracteres."
                },
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "Las contraseñas deben ser identicas.";
                }
              })
            }
          />
          {
            errors.password_confirmation && (
              <ErrorForm>{ errors.password_confirmation.message }</ErrorForm>
            )
          }
        </div>

        <button type="submit" className="w-[306px] border-4 border-black py-3 rounded-lg text-2xl hover:bg-black hover:text-white hover:transition-colors transition-colors">REGISTRAR</button>

        <p className="text-xl"><Link to={'/login'}>Ya tengo una cuenta</Link></p>
      </form>
    </div>
  )
}
