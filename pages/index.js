import useQuiosco from "@/hooks/useQuiosco";
import Layout from "@/layouts/Layout";
import Productos from "@/components/Productos";



export default function Home({categorias}) {

  const { categoriaActual } = useQuiosco()

  return (
    <>
        <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
          <h1 className="font-black text-5xl text-amber-500">{`${categoriaActual?.nombre}`}</h1>
          <p className="text-2xl my-10">
            Elige y personaliza tu pedido a continuación
          </p>


          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {categoriaActual?.productos?.map(producto => (
                <Productos
                    key={producto.id}
                    producto={producto}
                />
            ))}
          </div>
        </Layout>
    </>
  );
}
