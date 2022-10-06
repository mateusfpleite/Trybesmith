import User from '../interfaces/users.interfaces';
import connection from '../models/connection';
import UserModel from '../models/User.model';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async insertUser(user: User): Promise<string> {
    const token = await this.model.insertUser(user);
    return token;
  }
}