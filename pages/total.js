import { useEffect, useCallback } from "react"
import Layout from "@/layouts/Layout"
import useQuiosco from "@/hooks/useQuiosco"
import { formatearDinero } from "@/helpers"

export default function Total() {

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    }, [pedido, nombre])

    useEffect(() => {
        comprobarPedido()
    },[pedido, comprobarPedido])

    
    return(
        <>
            <Layout pagina={'Total del Pedido'}>
                <h1 className="font-black text-5xl text-amber-500">Total del Pedido</h1>
                <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

                <form onSubmit={colocarOrden}>
                    <div>
                        <label
                            htmlFor="nombre"
                            className="uppercase text-slate-800 font-bold block text-xl"
                        >
                            Nombre
                        </label>

                        <input
                            type="text"
                            className="bg-gray-200 w-full rounded-md lg:w-1/3 p-2 mt-2"
                            placeholder="Nombre"
                            id="nombre"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="mt-10">
                        <p className="text-2xl">
                            Total a pagar: {''} <span className="text-amber-500 font-black">{formatearDinero(total)}</span>
                        </p>
                    </div>

                    <div className="mt-5">
                        <input
                            type="submit"
                            value='Confirmar Pedido'
                            className={`${comprobarPedido() ? 'bg-amber-100 ' : 'bg-amber-700 hover:cursor-pointer hover:bg-amber-900 transition-all'} uppercase font-bold text-white px-5 py-2 rounded-md text-center`}
                            disabled={comprobarPedido()}
                        />
                    </div>
                </form>
            </Layout>
        </>
    )
}