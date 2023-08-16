import mongoose from "mongoose";

const cartCollection = 'cart'

const cartSchema = new mongoose.Schema({
    product
    
})

const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel