import { useNavigate } from "react-router"

export default function FormSearch() {

    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const filter = formData.get('personaje') as string;
        if (!filter) { // si no existe filtro
            return
        }
        navigate(`/search?personaje=${filter}`);
    }

    return (
        <form onSubmit={handleSearch} className="w-full h-full flex justify-center items-center" autoComplete="off">
            <input type="text" name="personaje" placeholder="Buscar Personaje" className="w-[300px] md:w-[450px] relative border-4 border-black p-4 outline-none rounded-lg text-2xl" />
        </form>
    )
}
