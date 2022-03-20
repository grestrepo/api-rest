import faker from 'faker';
import {Product} from '../interfaces';

export class ProductService {
  private products: Product[] = [];
  constructor(){
    this.generate();
  }

  private generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      });
    }
  }

  findProducts(): Product[]{
    return this.products;
  }

  findProduct(id: string): Product | undefined {
    const product = this.products.find(item => item.id === id);
    return product;
  }
}
