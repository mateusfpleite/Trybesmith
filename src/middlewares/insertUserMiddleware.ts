import { NextFunction, Request, Response } from 'express';
import statusCodes from '../helpers/statusCodes';

export const usernameVal = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body; 
  if (!username) { 
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' }); 
  }
  const usernameValidation = username.length > 2; 
  if (typeof username !== 'string') { 
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"username" must be a string' },
    ); 
  }
  if (!usernameValidation) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"username" length must be at least 3 characters long' },
    );
  }
  next();
};

export const classeVal = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body; 
  if (!classe) { 
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"classe" is required' }); 
  }
  const classeValidation = classe.length > 2; 
  if (typeof classe !== 'string') { 
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"classe" must be a string' },
    ); 
  }
  if (!classeValidation) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"classe" length must be at least 3 characters long' },
    );
  }
  next();
};

export const levelVal = (req:Request, res:Response, next: NextFunction) => {
  const { level } = req.body;
  if (level === undefined) { 
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"level" is required' }); 
  }
  if (typeof level !== 'number') {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"level" must be a number' },
    );
  }
  const levelValidation = level > 0;
  if (!levelValidation) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"level" must be greater than or equal to 1' },
    );
  }
  next();
};

export const passwordVal = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body; 
  if (!password) { 
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' }); 
  }
  const minPasswordLength = 8;
  const passwordValidation = password.length >= minPasswordLength; 
  if (typeof password !== 'string') { 
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"password" must be a string' },
    ); 
  }
  if (!passwordValidation) {
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json(
      { message: '"password" length must be at least 8 characters long' },
    );
  }
  next();
};