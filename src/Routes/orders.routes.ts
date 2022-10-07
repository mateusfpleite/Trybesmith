import { Router } from 'express';
import OrderController from '../controllers/Order.controller';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/orders', orderController.getAll);
// orderRouter.post('/orders', orderController.insertProduct);
export default orderRouter;