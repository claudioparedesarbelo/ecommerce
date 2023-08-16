import { Router } from 'express'
import CartManager from '../dao/fileManager/cart.manager.js'

const router = Router()
const cartManager = new CartManager()

router.get('/', async (req, res) => {
    try{
    const result = await cartManager.list()
    res.send(result)
    }catch {
        res.status(404).json({status: "error", message: "file not found"})
    }
})

router.post('/:idc/product/:idp', async (req, res) => {
    try{
    const idc = parseInt(req.params.idc)
    const idp = parseInt(req.params.idp)
    const result = await cartManager.addProduct(idc, idp)
    res.send(result)
    }catch {
        res.status(500).json({status: "error", message: "Internal server error"})
    }
})

router.post('/', async (req, res) => {
    const result = await cartManager.create()
    res.send(result)
})

export default router