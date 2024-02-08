import { Injectable } from '@nestjs/common';
import { AddUserDto } from '../dto/UserDto';
import { UserRepository } from '../domain/rds/repository/UserRepository';
import { User } from '../domain/rds/entity/User';

@Injectable()
export class UserService {
    public constructor(private userRepository: UserRepository) {}

    public async findUser(id: number): Promise<User | null> {
        return await this.userRepository.getById(id);
    }

    public async findAll(): Promise<User[]> {
        return await this.userRepository.findAll();
    }

    public async addUser(addUserDto: AddUserDto): Promise<User> {
        return await this.userRepository.add(addUserDto);
    }
}
