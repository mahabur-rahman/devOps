import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop({ required: true })
  title: string;

  @Prop()
  genre: string;

  @Prop()
  releaseDate: Date;

  @Prop()
  platform: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
