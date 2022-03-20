import supertest from 'supertest';
import {Server} from '../../../../src/server';

const server = new Server();

const app = server.getApp;
const api = supertest(app);

describe('Test en la ruta de productos', () => {
  test('Test en la ruta /products/', async () => {
    await api.get('/api/v1/products/')
    .expect(200)
    .expect('Content-Type', /application\/json/);
  });
});
