import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { JWTData } from '../interfaces/utils.interfaces';

dotenv.config();

declare module 'express-serve-static-core' {
  interface Request {
    headers: {
      authorization: string,
    }
    user: JWTData,
  }
}

interface JWTResponse extends JwtPayload {
  data: JWTData,
}

const SECRET: string = process.env.JWT_SECRET || 'secret';

const tokenValidation = (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { data } = jwt.verify(authorization, SECRET) as JWTResponse;
    req.user = data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenValidation;