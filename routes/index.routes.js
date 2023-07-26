import express from 'express';
import userRouter from './user.routes.js';
import cartRouter from './cart.routes.js';
import productRouter from './product.routes.js';

const indexRouter = express.Router();

indexRouter.use('/v1/api/user', userRouter);
indexRouter.use('/v1/api/cart', cartRouter);
indexRouter.use('/v1/api/product', productRouter);

export default indexRouter;