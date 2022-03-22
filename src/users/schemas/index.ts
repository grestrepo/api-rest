import * as Joi from 'joi';

export const id = Joi.string();
export const name = Joi.string().min(3).max(100);
export const lastName = Joi.string().min(3).max(100);
export const email = Joi.string().min(3).email();
export const password = Joi.string().min(4).max(100);
export const profession = Joi.string().min(4).max(100);
export const role = Joi.string().min(4).max(100);

export const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  profession: profession,
  role: role.required(),
});

export const updateUserSchema = Joi.object({
  name: name,
  lastName: lastName,
  email: email,
  password: password,
  profession: profession,
  role: role,
});

export const getUserValidator = Joi.object({
  id: id.required()
});
