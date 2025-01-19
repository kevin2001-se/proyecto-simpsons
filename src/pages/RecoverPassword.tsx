import { useForm } from "react-hook-form";
import { Link } from "react-router";
import ErrorForm from "../components/ErrorForm";
import { useAppStore } from "../store";

const initialValues = {
  email: "",
}

export default function RecoverPassword() {

  const recover_password = useAppStore((state) => state.recover_password)

  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: initialValues})
  
    const handleRegister = async (formData: { email: string }) => {
      await recover_password(formData);
    }

  return (
    <div className="flex-1 flex justify-center items-center p-4">
      <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col justify-center items-center sm:w-[613px] gap-5">
        <h1 className="text-5xl text-center">RECUPERAR CONTRASEÑA</h1>

        <div className="w-full">
          <input type="email" placeholder="Correo Electronico" 
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

        <button type="submit" className="w-[306px] border-4 border-black py-3 rounded-lg text-2xl hover:bg-black hover:text-white hover:transition-colors transition-colors">ENVIAR</button>

        <p className="text-xl"><Link to={'/login'}>Iniciar sesión</Link></p>
      </form>
    </div>
  )
}
