import { NextFunction, Request, Response } from 'express';
import statusCodes from '../helpers/statusCodes';

export const productNameVal = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body; 
  if (!name) return res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  const nameValidation = name.length > 2; 
  if (typeof name !== 'string') { 
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"name" must be a string' },
    ); 
  }
  if (!nameValidation) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"name" length must be at least 3 characters long' },
    );
  }
  next();
};

export const productAmountVal = (req:Request, res:Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) return res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  const amountValidation = amount.length > 2;
  if (typeof amount !== 'string') {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"amount" must be a string' },
    );
  }
  if (!amountValidation) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"amount" length must be at least 3 characters long' },
    );
  }
  next();
};