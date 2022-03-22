import {Product} from '../entities/Product.entity';


export class ProductService {

  async findProducts(): Promise<Product[]> {
    const products = await Product.find();

    return products;
  }

  async findProduct(id: number): Promise<Product | null> {
    const product = await Product.findOne({
      where: {
        id
      }
    });

    return product;
  }

  async createProduct(data: any): Promise<Product[]>{
    const product = Product.create({
      ...data,
      createdAt: new Date()
    });

    const saved = Product.save(product);

    return saved;
  }

  async updateProduct(id: number, changes: any) {
    const product = await this.findProduct(id);

    if(!product){
      return null;
    }

    const updateProduct: Product = {
      ...product,
      ...changes
    };

    return await Product.save(updateProduct);
  }
}
