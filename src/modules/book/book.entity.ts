import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'book' })
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn({ unsigned: true, comment: '' })
    id!: number;

    @Column({ type: 'varchar', length: 10 })
    auth: string = '';

    @Column({ type: 'varchar', length: 30 })
    title: string = '';
}
