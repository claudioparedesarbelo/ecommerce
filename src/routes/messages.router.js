import { Router } from "express";

const router = Router()

router.get('/messages', (req, res)=>{
    res.render('chat')
})

export default router