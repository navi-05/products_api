// You can use Express.Router() to manage a common endpoint(ROUTE)

import express from 'express'
import morgan from 'morgan';
import { createProduct, getAllProducts, getProductById } from '../handlers/products.js';

const productRouter = express.Router();
productRouter.use(morgan('tiny'))

productRouter.get('/', getAllProducts)
productRouter.get('/:id', getProductById)
productRouter.post('/', createProduct)

export default productRouter