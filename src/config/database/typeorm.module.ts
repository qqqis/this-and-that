import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Book } from '../../modules/book/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        url: configService.get('DB_URI'),
        entities: [Book],
        synchronize: false,
        logging: false
      }),
      inject: [ConfigService]
    })
  ]
})
export class MyTypeOrmModule {}
