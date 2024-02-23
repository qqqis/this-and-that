import { Controller, Body, Get, UsePipes, ValidationPipe, Post, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { validationPipeOptions } from '../../common/validation';
import { AddBookDto } from './dtos';

@Controller('/books')
export class BookController {
  public constructor(private readonly bookService: BookService) {}

  @Get()
  public async getBooks(): Promise<Book[]> {
    const books = await this.bookService.findAll();

    return books;
  }

  @Post()
  @UsePipes(new ValidationPipe(validationPipeOptions.addData))
  public async addBook(@Body() addBookDto: AddBookDto): Promise<Book> {
    const saveBook = await this.bookService.addBook(addBookDto);
    return saveBook;
  }

  @Get('/:id')
  public async getBook(@Param('id') id: number): Promise<Book | null> {
    const book = await this.bookService.findBook(id);
    return book;
  }
}
