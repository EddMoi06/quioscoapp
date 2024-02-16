import Image from "next/image"
import { formatearDinero } from "@/helpers"
import useQuiosco from "@/hooks/useQuiosco"

const ResumenPedidos = ({producto}) => {

    const {handleEditarCantidades, handleEliminarProductos} = useQuiosco()

  return (
    <div className="p-5 shadow mb-3 flex gap-10 items-center rounded-sm">
        <div className="md:w-1/6">
            <Image
                width={300}
                height={400}
                alt={`Imagen Producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>

        <div className="md:w-4/6">
            <p className="text-3xl font-bold">{producto.nombre}</p>
            <p className="text-xl font-bold mt-2"> Cantidad: {producto.cantidad}</p>
            <p className="text-xl font-bold mt-2 text-amber-500"> Precio: {formatearDinero(producto.precio)}</p>
            <p className="text-sm mt-2 text-gray-700"> Sub-Total: {formatearDinero(producto.precio * producto.cantidad)}</p>
        </div>

        <div className="md:w-6/6 flex flex-col gap-5">
            <button
                type="button"
                className="bg-sky-600 flex gap-2 px-5 py-2 rounded-md shadow-sm uppercase font-bold text-white w-full hover:bg-sky-800 transition-colors"
                onClick={() => handleEditarCantidades(producto.id)}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" 
                    />
                </svg>

                Editar
            </button>

            <button
                type="button"
                className="bg-red-600 flex gap-2 px-5 py-2 rounded-md shadow-sm uppercase font-bold text-white w-full hover:bg-red-800 transition-colors"
                onClick={() => handleEliminarProductos(producto.id)}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                    />
                </svg>
          
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default ResumenPedidos
