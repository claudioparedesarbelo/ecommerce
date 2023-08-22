import { Router } from "express";
import productModel from "../dao/mongoManager/models/product.model.js";


const router = Router()


router.get('/', async (req, res) => {
    const products = await productModel.find().lean().exec()
    res.render('index', {products})
})

router.get('/products', async (req, res) => {
    const products = await productModel.find().lean().exec()
    res.render('home', {products})
})

router.get('/products-realtime', async (req, res) => {
    const products = await productModel.find().lean().exec()
    res.render('products_realtime', {products})
})

router.get('/form-products', async (req, res) => {
    res.render('form', {})
})

router.post('/form-products', async (req, res) => {
    const data = req.body
    const dataGenerated = new productModel(data)
    await dataGenerated.save()
    console.log(dataGenerated)
    res.redirect('/index/' + dataGenerated.name)
})

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id
    await productModel.deleteOne({ _id: id })
    res.redirect('/products-realtime')
})





export default router