import { Router } from 'express';
import UserController from '../controllers/User.controller';
import { classeVal, levelVal, passwordVal, usernameVal } from '../middlewares/insertUserMiddleware';
import validateLogin from '../middlewares/loginMiddleware';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/users', usernameVal, classeVal, levelVal, passwordVal, userController.insertUser);
userRouter.post('/login', validateLogin, userController.userLogin);
export default userRouter;