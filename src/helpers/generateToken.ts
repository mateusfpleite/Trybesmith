import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const SECRET:string = process.env.JWT_SECRET || 'secret';
const tokenGenerator = (username:string, classe: string, level:number) => {
  const token = jwt.sign({ data: { username, classe, level } }, SECRET);
  return token;
}; 
export default tokenGenerator;