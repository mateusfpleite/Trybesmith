import { Router } from 'express';
import UserController from '../controllers/User.controller';
import validateLogin from '../middlewares/loginMiddleware';

const userRouter = Router();

const userController = new UserController();

// productRouter.get('/products', productController.getAll);
userRouter.post('/users', userController.insertUser);
userRouter.post('/login', validateLogin, userController.userLogin);
export default userRouter;