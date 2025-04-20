import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { Game, GameSchema } from './schema/games.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
  ],
  providers: [GamesService],
  controllers: [GamesController],
})
export class GamesModule {}
