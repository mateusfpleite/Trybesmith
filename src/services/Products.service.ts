import Product from '../interfaces/products.interfaces';
import connection from '../models/connection';
import ProductModel from '../models/Products.model';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async insertProduct(product: Product): Promise<Product> {
    const newInsertionId = await this.model.insertProduct(product);
    return { id: newInsertionId, ...product };
  }
}

export default ProductService;