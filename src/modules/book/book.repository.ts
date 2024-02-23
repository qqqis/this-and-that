import { Injectable } from '@nestjs/common';
import { DataSource, Equal, Repository } from 'typeorm';
import { Book } from './book.entity';
import { AddBookDto } from './dtos';

@Injectable()
export class BookRepository {
  private bookRepository: Repository<Book>;

  constructor(private readonly dataSource: DataSource) {
    this.bookRepository = this.dataSource.getRepository(Book);
  }

  public async getById(id: number): Promise<Book | null> {
    return this.bookRepository.findOneBy({ id: Equal(id) });
  }

  public findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  public addBook(addBookDto: AddBookDto): Promise<Book> {
    return this.bookRepository.save(addBookDto);
  }
}
