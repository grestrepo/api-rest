import {Request, Response, NextFunction} from 'express';
import {ObjectSchema} from 'joi';

import {IProperty} from '../interfaces';

export const validatorHandler = (schema: ObjectSchema, property: IProperty) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data: any = req[property];
    const {error} = schema.validate(data);
    if(error){
      return res.status(500).json({
        ok: false,
        error: error.details,
        message: error.message
      });
    }

    return next();
  };
};
