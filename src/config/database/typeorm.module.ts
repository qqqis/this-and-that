import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../../modules/book/book.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 9001,
            username: 'root',
            password: 'example',
            database: 'dev_db',
            entities: [Book],
            synchronize: false,
            logging: false
        })
    ]
})
export class MyTypeOrmModule {}
