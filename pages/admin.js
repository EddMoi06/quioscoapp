import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "./adminLayout"
import Orden from '@/components/Orden'

export default function Admin(){
    
    const fetcher = () => axios('/api/ordenes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})

    console.log(data)

    return(
        <AdminLayout pagina={'Admin'}>
            <h1 className="font-black text-5xl text-amber-500">Panel de Administración</h1>
            <p className="text-2xl my-10">Administra tus Ordenes</p>

            {data && data.length ? data.map( orden => (
                <Orden
                    key={orden.key}
                    orden={orden}
                />
            )) : 'Aún no hay ordenes'}
        </AdminLayout>
    )
}