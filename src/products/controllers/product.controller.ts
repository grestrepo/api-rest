import { Request, Response } from 'express';

import { ProductService } from '../services/Product.service';

const productService = new ProductService();

export const getProducts = async (req: Request, res: Response) => {
  const productos = await productService.findProducts();

  res.status(200).json({ok: true, productos});
};

// export const getProduct = (req: Request, res: Response) => {
//   const {id} = req.params;
//   const product = productService.findProduct(id);

//   if(!product){
//     res.status(400).json({
//       ok: false,
//       message: `No encontró ningún producto con el id: ${id}`
//     });
//   }

//   res.status(200).json({
//     ok: true,
//     product
//   });
// };


export const createProduct = async (req: Request, res: Response) => {
  const data = req.body;
  const productCreated = await productService.createProduct(data);

  res.status(200).json({
    ok: true,
    product: productCreated
  });
};

// export const updateProduct = (req: Request, res: Response) => {
//   const {id} = req.params;
//   const changes = req.body;

//   const product: Product = productService.updateProduct(id, changes);

//   res.status(200).json({
//     ok: true,
//     product
//   });
// };
