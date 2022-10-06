import { Pool, ResultSetHeader } from 'mysql2/promise';
import tokenGenerator from '../helpers/generateToken';
import User from '../interfaces/users.interfaces';

export default class UserModel {
  private connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection; 
  }

  public async insertUser(user: User): Promise<string> {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users(username, classe, level, password) 
    VALUES (?, ?, ?, ?)`; 
    await this.connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
    return tokenGenerator(username, classe, level);
  }
}