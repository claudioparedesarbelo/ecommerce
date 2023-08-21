import mongoose from "mongoose";

const productCollection = 'products'

const productSchema = new mongoose.Schema({
    marca: {type: String, require: true},
    description: {type: String, require: true},
    code: {type: String, require: true},
    price: {type: Number, require: true},
    stock: {type: Number, require: true},
    thumbnails: {type: String, require: true},
    id: {type: Number, require: true}
    
})

const productModel = mongoose.model(productCollection, productSchema)

export default productModel