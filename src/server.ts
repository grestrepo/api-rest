import express, { Application } from 'express';
import cors from 'cors';

import {connection} from './core/config/db-connection';
import {userRouter} from './users/routes/user.router';
import {productRouter} from './products/routes';

interface Path {
  users: string;
  products: string;
}

export class Server {

  private app: Application;
  path: Path;
  port: string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '3000';
    this.path = {
      users: '/api/v1/users',
      products: '/api/v1/products'
    };

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  get getApp(){
    return this.app;
  }

  private middlewares(){
    this.app.use(cors({origin: true}));
    this.app.use(express.json());
  }

  private routes(){
    this.app.use(this.path.users, userRouter);
    this.app.use(this.path.products, productRouter);
  }

  private dbConnection(){
    connection.then(() => {
      console.log('Se realizó la conexión');
    })
    .catch(err => {
      console.log('Ocurrió un error en la conexión de base de datos');
    });
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log('Escuchando puerto: ', this.port);
    });
  }
}
