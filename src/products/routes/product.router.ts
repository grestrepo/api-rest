import { Router } from 'express';

import {getProducts, getProduct, createProduct, updateProduct} from '../controllers';
import {validatorHandler} from '../../core/middlewares';

import {createProductSchema, updateProductSchema, getProductValidator} from '../schemas';

export const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', [
  validatorHandler(getProductValidator, 'params')
], getProduct);
productRouter.post('/', [
  validatorHandler(createProductSchema, 'body')
], createProduct);
productRouter.put('/:id', [
  validatorHandler(getProductValidator, 'params'),
  validatorHandler(updateProductSchema, 'body')
],updateProduct);
