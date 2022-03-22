import {Request, Response} from 'express';

import {UserService} from '../services/User.service';

const userService = new UserService();

export const getUsers = async (req: Request, res: Response) => {
  const user = await userService.findUsers();

  if(!user){
    return res.status(404).json({
      ok: false,
      message: 'No encontré el usuario'
    });
  }

  return res.status(200).json({
    ok: true,
    user
  });
};

export const getUser = async (req: Request, res: Response) => {
  const {id} = req.params;

  const user = await userService.findUser(Number(id));

  if(!user){
    return res.status(404).json({
      ok: false,
      message: 'Usuario no encontrado'
    });
  }

  return res.status(200).json({
    ok: true,
    user
  });

};

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;

  const saved = await userService.createUser(data);

  res.status(200).json({
    ok: true,
    user: saved
  });

};
