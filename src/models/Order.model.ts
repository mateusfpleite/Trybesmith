import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/orders.interfaces';
import { JWTData } from '../interfaces/utils.interfaces';

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

  public async insertOrder(productsIds: number[], user: JWTData) {
    const userQuery = 'SELECT id FROM Trybesmith.Users WHERE username = ?';
    const [[result]] = await this.connection.execute<RowDataPacket[]>(userQuery, [user.username]);
    const orderQuery = 'INSERT INTO Trybesmith.Orders(userId) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(orderQuery, [result.id]);
    await Promise.all(productsIds.map(async (id) => {
      const productQuery = `
      UPDATE Trybesmith.Products
      SET orderId = ?
      WHERE id = ?`;
      const insertion = await this.connection.execute(productQuery, [insertId, id]);
      return insertion;
    }));
    return result.id;
  }
}