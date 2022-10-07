import { Request, Response } from 'express';
import statusCodes from '../helpers/statusCodes';
import OrderService from '../services/Order.service';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const result = await this.service.getAll();
    return res.status(statusCodes.OK).json(result);
  }; 
}