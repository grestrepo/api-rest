import { Router } from 'express';

import {getProducts, getProduct} from '../controllers';


export const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
