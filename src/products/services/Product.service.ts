import {Product} from '../entities/Product.entity';


export class ProductService {

  async findProducts(): Promise<Product[]> {
    const products = await Product.find();

    return products;
  }

  async createProduct(data: any): Promise<Product[]>{
    const product = Product.create({
      ...data
    });

    const saved = Product.save(product);

    return saved;
  }
}
