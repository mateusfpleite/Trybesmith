import Order from '../interfaces/orders.interfaces';
import { JWTData } from '../interfaces/utils.interfaces';
import connection from '../models/connection';
import OrderModel from '../models/Order.model';

export default class OrderService {
  private model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }
    
  public async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();
    return result;
  }

  public async insertOrder({ productsIds }: { productsIds: number[] }, user: JWTData) {
    const userId = await this.model.insertOrder(productsIds, user);
    return { userId, productsIds };
  }
}