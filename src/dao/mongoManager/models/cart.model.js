import mongoose from "mongoose";

const cartCollection = 'cart'

const cartSchema = new mongoose.Schema({
    products:
        {
        idProducto: {type: String},
        quantity: {type: Number},
        }
    
    
})

const cartModel = mongoose.model(cartCollection, cartSchema)

export default cartModel