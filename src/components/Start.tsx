import { useEffect, useState } from "react"
import { useAppStore } from "../store";
import { TheSimpson } from "../types";
import toast from "react-hot-toast";

export default function Start({active = false, personaje} : {active?: boolean, personaje: TheSimpson}) {

  const [colorActive, setcolorActive] = useState('#ffffff')
  const [activeIco, setActiveIco] = useState(active)

  const getUser = useAppStore((state) => state.getUser)
  const user = useAppStore((state) => state.user)
  const getTokenAuth = useAppStore((state) => state.user)

  const addFavorites = useAppStore((state) => state.addFavorites)
  const deleteFavorites = useAppStore((state) => state.deleteFavorites)

  useEffect(() => {
    
    setActiveIco(active);
    if (active === true) {
      setcolorActive('#FFE100');
    } else {
      setcolorActive('#ffffff');
    }
  
  }, [active])
  
  // Validar si existe usuario authenticado
  const handleValidAuth = () => {
    getUser();
    if (getTokenAuth && user) {
      if (activeIco === true) {
        deleteFavorites(personaje);
        setActiveIco(false);
      } else {
        addFavorites(personaje);
        setActiveIco(true);
      }
    } else {
      toast.error('Debe iniciar sesión')
    }
  }

  return (
    <button type='button' className="absolute top-4 right-4" onClick={handleValidAuth}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.951 2.92699C12.652 2.00599 11.349 2.00599 11.049 2.92699L9.52997 7.60099C9.46455 7.80164 9.33732 7.97644 9.1665 8.10038C8.99568 8.22432 8.79002 8.29104 8.57897 8.29099H3.66497C2.69697 8.29099 2.29297 9.53099 3.07697 10.101L7.05297 12.989C7.22377 13.1131 7.35087 13.2882 7.41608 13.489C7.48129 13.6899 7.48125 13.9062 7.41597 14.107L5.89797 18.781C5.59797 19.702 6.65297 20.469 7.43597 19.899L11.412 17.011C11.5829 16.8868 11.7887 16.8198 12 16.8198C12.2112 16.8198 12.4171 16.8868 12.588 17.011L16.564 19.899C17.347 20.469 18.402 19.703 18.102 18.781L16.584 14.107C16.5187 13.9062 16.5187 13.6899 16.5839 13.489C16.6491 13.2882 16.7762 13.1131 16.947 12.989L20.923 10.101C21.706 9.53099 21.304 8.29099 20.335 8.29099H15.42C15.2091 8.29083 15.0037 8.22402 14.833 8.10009C14.6624 7.97617 14.5353 7.80148 14.47 7.60099L12.951 2.92699Z" fill={colorActive} stroke="#181818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
