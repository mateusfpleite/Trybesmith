import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products.interfaces';

class ProductModel {
  private connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async getAll():Promise<Product[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Product[];
  }

  public async insertProduct(product:Product): Promise<number> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products(name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    return insertId;
  }
}

export default ProductModel;