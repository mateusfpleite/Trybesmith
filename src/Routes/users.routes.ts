import { Router } from 'express';
import UserController from '../controllers/User.controller';

const userRouter = Router();

const userController = new UserController();

// productRouter.get('/products', productController.getAll);
userRouter.post('/users', userController.insertUser);
export default userRouter;