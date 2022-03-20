import { Router } from 'express';

import {getProducts, createProduct} from '../controllers';


export const productRouter = Router();

productRouter.get('/', getProducts);
// productRouter.get('/:id', getProduct);
productRouter.post('/', createProduct);
// productRouter.put('/:id', updateProduct);
