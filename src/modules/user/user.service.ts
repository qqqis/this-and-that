import { Injectable } from '@nestjs/common';
import { AddUserDto } from './dtos';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

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
