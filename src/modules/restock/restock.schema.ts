import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Transform } from 'class-transformer';

@Schema()
export class Restock {
    @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;

    @Prop()
    bookId: number;

    @Prop()
    quantity: number;
}

export const RestockSchema = SchemaFactory.createForClass(Restock);
