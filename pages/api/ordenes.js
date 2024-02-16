import { PrismaClient } from "@prisma/client"

export default async function handle(req, res){
    const prisma = new PrismaClient()

    const ordenes = await prisma.orden.findMany({
        where: {
            estado : false
        }
    })

    res.status(200).json(ordenes)

    if(req.method === 'POST'){
        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                total: req.body.total,
                pedidos: req.body.pedido
            }
        })

        res.status(200).json(orden)
    }
}