import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import Categorias from "./Categorias"

const SideBar = () => {

    const { categorias } = useQuiosco()
    
  return (
    <>
        <Image 
            width={200} 
            height={100} 
            src="/assets/img/logo.svg"
            alt="Imagen Logotipo"
            className="mx-auto mt-5"
        />

        <nav className="mt-10">
            {categorias.map( categoria => (
                <Categorias 
                    key={categoria.id}
                    categoria={categoria}
                />
            ))}
        </nav>
    </>
  )
}

export default SideBar
