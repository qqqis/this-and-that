import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../config/database/database.module';
import { UserProvider } from './user.provider';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [...UserProvider, UserService, UserRepository]
})
export class UserModule {}
