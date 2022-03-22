import {Router} from 'express';

import {getUsers, getUser, createUser} from '../controllers';
import {validatorHandler} from '../../core/middlewares';
import {createUserSchema, getUserValidator} from '../schemas';

export const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', [
  validatorHandler(getUserValidator, 'params')
], getUser);
userRouter.post('/',[
  validatorHandler(createUserSchema, 'body')
], createUser);
