import express from 'express';
import {createCart,
    getCarts,
    getCartById,
    addCartByProductId,
    deleteAllProducts} from '../controllers/cartController.js'
const cartRouter = express.Router();

cartRouter.post('/', createCart)

cartRouter.get('/', getCarts)

cartRouter.get('/:cid/products/:pid', addCartByProductId)

cartRouter.delete('/:cid', deleteAllProducts)

cartRouter.get('/:cid', getCartById);
    

export default cartRouter;