import express from 'express'
import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import productRouter from './routes/product.router.js'
import cartRouter from './routes/cart.router.js'
import viewsRouter from './routes/views.router.js'
import __dirname from './utils.js'
import productModel from './dao/mongoManager/models/product.model.js'

const app = express()

app.use('/', express.static('./src/public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.use('/', viewsRouter)

app.use('/api/cart', cartRouter)



const runServer = () => {
    const httpServer = app.listen(8080, () => console.log('Listening...'))
    const io = new Server(httpServer)
    const socketServer = new Server(httpServer)
    io.on('connection', socket => {
        socket.on('new-product',async data => {
            const productManager = new productModel(data)
            await productManager.save()
            const products = await productModel.find().lean().exec()
            io.emit('reload-table', products)
        })
    })
    const messages = []
    socketServer.on('connection', socket => {
        console.log('Nuevo cliente conectado')
        socket.on('new', user => console.log(`${user} se acaba de conectar`))
        socket.on('message', data => {
            messages.push(data)
            socket.emit('logs', messages)
        })
    })

}


const URL = "mongodb+srv://claudioparedes:Cabeza2$@cluster1.rimje8x.mongodb.net/?retryWrites=true&w=majority"

console.log('Connecting...')
mongoose.set('strictQuery', false)
mongoose.connect(URL, {
    dbName: 'ecommerce'
})
.then(() => {
    console.log("DB connected!!!")
    runServer()
})

.catch(e => {
    console.log("Can't connect to DB")
})

    



        
    
