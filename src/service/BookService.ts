import { Injectable } from '@nestjs/common';
import { Book } from '../domain/rds/entity/Book';
import { BookRepository } from '../domain/rds/repository/BookRepository';
import { AddBookDto } from '../dto/BookDto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    // @InjectRepository(Book)
    // @InjectRepository(BookRepository)
    private readonly bookRepository: BookRepository
  ) {}

  public async findAll(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }

  public async addBook(addBookDto: AddBookDto): Promise<Book> {
    return this.bookRepository.addBook(addBookDto);
  }
  public async findBook(id: number): Promise<Book | null> {
    return this.bookRepository.getById(id);
  }
}
