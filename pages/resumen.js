import Layout from "@/layouts/Layout"
import useQuiosco from "@/hooks/useQuiosco"
import ResumenPedidos from "@/components/ResumenPedidos"

export default function Resumen() {

    const { pedido } = useQuiosco()

    return(
        <>
            <Layout pagina={'Resumen'}>
                <h1 className="font-black text-5xl text-amber-500">Resumen</h1>
                <p className="text-2xl my-10">Revisa tu Pedido</p>

                {pedido.length === 0 ? (
                    <p className="text-center text-2xl">No hay elementos en tu pedido.</p>
                ) : (
                    pedido.map(producto => (
                        <ResumenPedidos
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                )}
            </Layout>
        </>
    )
}