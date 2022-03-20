import express, { Application } from 'express';

import {userRouter} from './users/routes/user.router';
import {productRouter} from './products/routes/product.router';

interface Path {
  users: string;
  products: string;
}

export class Server {

  app: Application;
  path: Path;
  port: string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '3000';
    this.path = {
      users: '/api/v1/users',
      products: '/api/v1/products'
    };

    this.middlewares();
    this.routes();
    this.listen();
  }

  private middlewares(){
    this.app.use(express.json());
  }

  private routes(){
    this.app.use(this.path.users, userRouter);
    this.app.use(this.path.products, productRouter);
  }

  private listen(){
    this.app.listen(this.port, () => {
      console.log('Escuchando puerto: ', this.port);
    });
  }

}
