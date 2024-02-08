import { Module } from '@nestjs/common';
import { DatabaseModule } from '../config/Database';
import { UserProvider } from '../provider/sequelize/UserProvider';
import { UserController } from '../../../controller/UserController';
import { UserService } from '../../../service/UserService';
import { UserRepository } from '../repository/UserRepository';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [...UserProvider, UserService, UserRepository],
})
export class UserModule {}
