import { Request, Response } from 'express';
import statusCodes from '../helpers/statusCodes';
import ProductService from '../services/Products.service';

class ProductController {
  service: ProductService;

  constructor() {
    this.service = new ProductService(); 
  }

  getAll = async (_req: Request, res: Response) => {
    const books = await this.service.getAll();
    res.status(statusCodes.OK).json(books);
  };
}

export default ProductController;