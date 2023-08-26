import { Router } from "express";
import cartModel from "../dao/mongoManager/models/cart.model.js";



const router = Router()


router.get('/', async (req, res) => {
    try{
    const result = await cartModel.find().lean().exec()
    res.render('cart', {result})
    }catch {
        res.status(404).json({status: "error", message: "file not found"})
    }
})

router.post('/:idc/product/:idp', async (req, res) => {
    try{
    const idc = parseInt(req.params.idc)
    const idp = parseInt(req.params.idp)
    const result = await cartModel.addProduct(idc, idp)
    res.send(result)
    }catch {
        res.status(500).json({status: "error", message: "Internal server error"})
    }
})

router.post('/', async (req, res) => {
    const result = await cartModel.create()
    res.send(result)
})

export default router