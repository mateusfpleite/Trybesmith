import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interfaces';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const query = `SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) AS productsIds
     FROM Trybesmith.Orders AS ord INNER JOIN Trybesmith.Products AS prod
     ON prod.orderId = ord.id GROUP BY prod.orderId`;
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Order[];
  }
}