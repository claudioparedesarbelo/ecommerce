import mongoose from "mongoose";

const productCollection = 'messages'

const messageSchema = new mongoose.Schema({
    marca: {type: String, require: true},
    description: {type: String, require: true},
    code: {type: String, require: true},
    price: {type: Number, require: true},
    stock: {type: Number, require: true},
    thumbnails: {type: String, require: true},
    
})

const messageModel = mongoose.model(messageCollection, messageSchema)

export default  messageModel