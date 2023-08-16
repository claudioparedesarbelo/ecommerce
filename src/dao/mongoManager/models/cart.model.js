import mongoose from "mongoose";

const cartCollection = 'cart'

const cartSchema = new mongoose.Schema({
    marca: {type: String, require: true},
    description: {type: String, require: true},
    code: {type: String, require: true},
    price: {type: Number, require: true},
    stock: {type: Number, require: true},
    thumbnails: {type: String, require: true},
    
})

const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel