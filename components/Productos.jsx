import Image from "next/image"
import { formatearDinero } from "@/helpers"
import useQuiosco from "@/hooks/useQuiosco"

const Productos = ({producto}) => {

    const { handleSetProducto, handleChangeModal } = useQuiosco()
  return (
    <div className="border p-3">
        <Image 
            src={`/assets/img/${producto.imagen}.jpg`} 
            alt={`Imagen ${producto.nombre}`} 
            width={400} 
            height={500}
        />

        <div className="p-5">
            <h3 className="font-bold text-2xl">{producto.nombre}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(producto.precio)}</p>

            <button
                type="button"
                className="bg-amber-500 hover:bg-amber-800 text-white font-bold uppercase w-full mt-5 p-3 rounded-sm hover:rounded-lg transition-all"
                onClick={() => {
                    handleSetProducto(producto)
                    handleChangeModal()
                }}
            >
                Agregar
            </button>
        </div>
    </div>
  )
}

export default Productos
