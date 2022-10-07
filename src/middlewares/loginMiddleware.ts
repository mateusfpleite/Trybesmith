import { NextFunction, Request, Response } from 'express';
import statusCodes from '../helpers/statusCodes';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  console.log(username, password);
  const { BAD_REQUEST } = statusCodes;
  if (!username) return res.status(BAD_REQUEST).json({ message: '"username" is required' });
  if (!password) return res.status(BAD_REQUEST).json({ message: '"password" is required' });
  next();
};

export default validateLogin;