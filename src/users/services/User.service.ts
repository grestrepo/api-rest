/* eslint-disable @typescript-eslint/no-explicit-any */
import {User} from '../entities/User.entity';

export class UserService {

  public async findUsers(): Promise<User[]>{
    const users = await User.find();

    return users;
  }

  public async findUser(id: number): Promise<User | null>{
    const user = await User.findOne({
      where: {
        id
      }
    });

    return user;
  }

  async createUser(data: any): Promise<User[]>{
    const user = User.create({
      ...data,
      createdAt: new Date()
    });

    const saved = User.save(user);

    return saved;
  }
}
