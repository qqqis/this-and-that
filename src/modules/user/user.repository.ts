import { Injectable, Inject } from '@nestjs/common';
import { SequelizeProvider } from '../../common/constants';
import { User, UserAttributes } from './user.entity';
import { AddUserDto } from './dtos';

@Injectable()
export class UserRepository {
  constructor(@Inject(SequelizeProvider.USER_TABLE) private userRepository: typeof User) {}

  public getById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  public findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  public add(addUserDto: AddUserDto): Promise<User> {
    return this.userRepository.create(addUserDto as User);
  }
}
