import { Router } from 'express'
import passport from 'passport'
import Product from '../models/product'

const router = Router()

router.get('/products', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const products = await Product.find({})
    return res.send(products)
})

router.post('/addproduct', passport.authenticate('jwt', { session: false }), async (req, res) => {
    
    const { SKU, name, pictures, price, currency } = req.body
    const isIn = SKU && name && pictures && price && currency
    if(isIn){
       let newProduct = new Product(req.body)
       await newProduct.save()
       return res.status(201).send(newProduct)
    }

    return res.status(400).send('Some fields are missing')
})

export default router