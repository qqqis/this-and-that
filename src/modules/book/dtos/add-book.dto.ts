import { IsString } from 'class-validator';

export class AddBookDto {
    @IsString()
    readonly auth: string;

    @IsString()
    readonly title: string;
}
