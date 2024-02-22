import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../../config/database/database.module';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { Book } from './book.entity';

@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([Book])],
    controllers: [BookController],
    providers: [BookService, BookRepository]
})
export class BookModule {}
