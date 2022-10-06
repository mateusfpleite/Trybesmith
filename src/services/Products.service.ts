import Products from '../interfaces/products.interface';
import connection from '../models/connection';
import ProductModel from '../models/Products.model';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Products[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;