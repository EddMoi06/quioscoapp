import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

    useEffect(() => {
        const importCategorias = async () => {
            const { data } = await axios('/api/categorias')
            setCategorias(data.categorias)
        }

        importCategorias()
    },[])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    },[categorias])

    useEffect(() => {
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)


        setTotal(nuevoTotal)
    }, [pedido])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
        router.push('/')
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {

        const existe = pedido.some( productoState => productoState.id === producto.id)
        
        if(existe){
            const productos = pedido.map( productoState => productoState.id === producto.id ? producto : productoState
            )
            setPedido(productos);
            toast.success('Guardado Correctamente');
        }else{
            setPedido([...pedido, producto])
            toast.success('Agregado al Pedido');
        }
    }

    const handleEditarCantidades = id => {
       const editarProducto = pedido.filter( producto => producto.id === id)
       setProducto(editarProducto[0])

        setModal(!modal)
    }

    const handleEliminarProductos = id => {
        const eliminarProducto = pedido.filter( producto => producto.id !== id)
        setPedido(eliminarProducto)
        toast.error('Eliminado Correctamente')
    }

    const colocarOrden = async e => {
        e.preventDefault()

        try {
            await axios.post('/api/ordenes', { pedido, nombre, total, fecha: Date.now().toString()})
            
            setCategoriaActual(categorias[0])
            setPedido([])
            setNombre('')
            setTotal(0)

            toast.success('Orden Creada Correctamente')

            setTimeout(() => {
                router.push('/')
            }, 3000);
        } catch (error) {
            
        }
    }

    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidades,
                handleEliminarProductos,
                nombre,
                setNombre,
                colocarOrden,
                total
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export { QuioscoProvider }
export default QuioscoContext