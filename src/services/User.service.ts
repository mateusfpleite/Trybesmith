import tokenGenerator from '../helpers/generateToken';
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

  public async userLogin(user: { username: string, password: string }) {
    const result = await this.model.userLogin(user);
    if (!result.length) return { type: 'UNAUTHORIZED', message: 'Username or password invalid' };
    const [{ username, classe, level }] = result;
    const token = tokenGenerator(username, classe, level);
    return { type: null, message: token };
  }
}