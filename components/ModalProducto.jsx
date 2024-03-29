import { useState, useEffect } from 'react'
import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";

const ModalProducto = () => {

    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco()
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect(() => {
        if(pedido.some(pedidoState => pedidoState.id === producto.id)){
            const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    }, [producto, pedido])


  return (
    <div className="md:flex gap-3">
        <div className="md:w-1/3">
            <Image
                width={300}
                height={400}
                alt={`Imagen Producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>

        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={() => handleChangeModal()}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5}       
                        stroke="currentColor" 
                        className="w-6 h-6 text-red-700"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M6 18 18 6M6 6l12 12" 
                        />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
            <p className="font-black text-5xl text-amber-500 mt-5">
                {formatearDinero(producto.precio)}
            </p>

            <div className="flex gap-4 mt-5">
                <button
                    type='button'
                    onClick={() => {
                        if (cantidad <= 1 ) return
                        setCantidad(cantidad - 1)
                    }}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5}   
                        stroke="currentColor" 
                        className="w-7 h-7"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                        />
                    </svg>
                </button>

                <p className="text-3xl text-amber-500 font-black">{cantidad}</p>

                <button
                    type='button'
                    onClick={() => {
                        if(cantidad >= 5) return
                        setCantidad(cantidad + 1)
                    }}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-7 h-7"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                        />
                    </svg>
                </button>
            </div>

            <button
                type='button'
                className="bg-amber-500 hover:bg-amber-800 text-white font-bold uppercase px-5 mt-5 p-3 rounded-sm hover:rounded-lg transition-all"
                onClick={() => { 
                    handleAgregarPedido({...producto, cantidad}) 
                    handleChangeModal()
                }}
            >
                {edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
            </button>
        </div>
    </div>
  )
}

export default ModalProducto
