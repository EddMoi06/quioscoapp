import Image from "next/image"
import axios from "axios"
import { toast } from 'react-toastify'
import { formatearDinero } from "@/helpers"

const Orden = ({orden}) => {

    const { id, nombre, pedidos, total } = orden

    const completarOrden = async () => {

        try {
            await axios.post(`/api/ordenes/${id}`)
            toast.success('Orden Lista')
        } catch (error) {
            toast.error('Hubo un error')
        }
    }

  return (
    <div className="border p-5 space-y-3">
        <h3 className="text-2xl font-bold">Orden: {id}</h3>
        <p className="text-lg font-bold"> Cliente: {nombre} </p>

        <div>
            {pedidos.map(platillo => (
                <div key={platillo.id} className="px-3 flex border-b last-of-type:border-0 items-center">
                    <div className="w-32">
                        <Image
                            width={400}
                            height={500}
                            src={`/assets/img/${platillo.imagen}.jpg`}
                            alt={`Imagen Platillo ${platillo.nombre}`}
                        />
                    </div>

                    <div className="space-y-2 p-5">
                        <h3 className="text-xl font-bold text-amber-500">{platillo.nombre}</h3>
                        <p className="text-xl font-bold">Cantidad : {platillo.cantidad}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="md:flex md:items-center md:justify-between my-10">
            <p className="mt-5 font-black text-xl md:text-4xl text-amber-600">
                Total a Pagar : {formatearDinero(total)}
            </p>

            <button
                type="button"
                className="bg-amber-500 hover:bg-amber-700 rounded mt-5 md:mt-0 px-3 py-2 uppercase text-white font-bold transition-colors"
                onClick={completarOrden}
            >
                Completar Orden
            </button>
        </div>
    </div>
  )
}

export default Orden
