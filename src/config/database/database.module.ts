import { Module } from '@nestjs/common';
import { MyTypeOrmModule } from './typeorm.module';
import { MongoDBModule } from './mongodb.module';
import { sequelizeProvider } from './sequelize.provider';

@Module({
  imports: [MyTypeOrmModule, MongoDBModule],
  providers: [...sequelizeProvider],
  exports: [...sequelizeProvider]
})
export class DatabaseModule {}
