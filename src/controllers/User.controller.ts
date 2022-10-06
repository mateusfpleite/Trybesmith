import { Request, Response } from 'express';
import statusCodes from '../helpers/statusCodes';
import UserService from '../services/User.service';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public insertUser = async (req: Request, res: Response) => {
    const token = await this.service.insertUser(req.body);
    return res.status(statusCodes.CREATED).json({ token });
  };
}