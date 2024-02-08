import { Module } from '@nestjs/common';
import { DatabaseModule } from '../domain/rds/config/Database';
import { UserModule } from '../domain/rds/module/User';
import { BookModule } from '../domain/rds/module/Book';

@Module({
  imports: [DatabaseModule, UserModule, BookModule],
})
export class AppModule {}
