import { Injectable } from '@nestjs/common';
import { DataSource, Equal, Repository } from 'typeorm';
import { Book } from '../entity/Book';
import { AddBookDto } from '../../../dto/BookDto';

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
    console.log('repository임!!!');
    return this.bookRepository.find();
  }

  public addBook(addBookDto: AddBookDto): Promise<Book> {
    console.log(addBookDto);
    return this.bookRepository.save(addBookDto);
  }
}
