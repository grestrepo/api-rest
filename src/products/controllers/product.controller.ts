import { Request, Response } from 'express';

import {ProductService} from '../services/Product.service';

const productService = new ProductService();

export const getProducts = (req: Request, res: Response) => {
  const productos = productService.findProducts();

  res.status(200).json({ok: true, productos});
};

export const getProduct = (req: Request, res: Response) => {
  const {id} = req.params;
  const product = productService.findProduct(id);

  if(!product){
    res.status(400).json({
      ok: true,
      message: `No encontró ningún producto con el id: ${id}`
    });
  }

  res.status(200).json({
    ok: true,
    product
  });
};
