import express from 'express'
import { getCart, getCartItems } from '../controller/cart.controller.js'
import { getOrder, getOrders } from '../controller/orders.controller.js'
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controller/product.controller.js'

const router = express.Router()

router.post('/products', addProduct)
router.get('/products/:id', getProduct)
router.get('/products', getProducts)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

// orders
router.get('/orders', getOrders)
router.get('/orders/:id', getOrder)

// cart
router.get('/cart', getCart)
router.get('/cart/items/:id', getCartItems)

export default router