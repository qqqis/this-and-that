import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../config/Database';
import { BookController } from '../../../controller/BookController';
import { BookService } from '../../../service/BookService';
import { BookRepository } from '../repository/BookRepository';
import { Book } from '../entity/Book';

@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([Book])],
    controllers: [BookController],
    providers: [BookService, BookRepository],
})
export class BookModule {}
