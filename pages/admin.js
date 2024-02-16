import AdminLayout from "./adminLayout"

export default function Admin(){

    return(
        <AdminLayout pagina={'Admin'}>
            <h1 className="font-black text-5xl text-amber-500">Panel de Administración</h1>
            <p className="text-2xl my-10">Administra tus Ordenes</p>
        </AdminLayout>
    )
}