import { Module } from '@nestjs/common';
import { MyTypeOrmModule } from './TypeormDataSource';
import { sequelizeProvider } from './SequelizeDataSource';

@Module({
  imports: [MyTypeOrmModule],
  providers: [...sequelizeProvider],
  exports: [...sequelizeProvider],
})
export class DatabaseModule {}
