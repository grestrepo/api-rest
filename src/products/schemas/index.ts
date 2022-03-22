import * as Joi from 'joi';

export const id = Joi.string();
export const name = Joi.string().min(3).max(100);
export const price = Joi.number().positive();
export const image = Joi.string().min(10);

export const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

export const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

export const getProductValidator = Joi.object({
  id: id.required()
});
