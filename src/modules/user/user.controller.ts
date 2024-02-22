import { Controller, Body, Get, UsePipes, ValidationPipe, Post, Param } from '@nestjs/common';
import { AddUserDto } from './dtos';
import { UserService } from './user.service';
import { User } from './user.entity';
import { validationPipeOptions } from '../../common/validation';

@Controller('/users')
export class UserController {
    public constructor(private readonly userService: UserService) {}

    @Get()
    public async getUsers(): Promise<User[]> {
        const user = await this.userService.findAll();

        return user;
    }
    @Post()
    @UsePipes(new ValidationPipe(validationPipeOptions.addData))
    public async addUser(@Body() addUserDto: AddUserDto): Promise<User> {
        const createdUser = await this.userService.addUser(addUserDto);
        return createdUser;
    }

    @Get('/:id')
    public async getUser(@Param('id') id: number): Promise<User | null> {
        const user = await this.userService.findUser(id);
        return user;
    }
}
