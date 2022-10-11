import { Router } from 'express';
import OrderController from '../controllers/Order.controller';
import OrderBodyVal from '../middlewares/insertOrderMiddleware';
import tokenValidation from '../middlewares/tokenValidation';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.get('/orders', orderController.getAll);
orderRouter.post('/orders', tokenValidation, OrderBodyVal, orderController.insertProduct);
export default orderRouter;