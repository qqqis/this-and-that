import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';

@Module({
    imports: [DatabaseModule, UserModule, BookModule]
})
export class AppModule {}
