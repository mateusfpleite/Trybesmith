import Order from '../interfaces/orders.interfaces';
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
}