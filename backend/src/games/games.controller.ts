import { Controller, Get, Post, Body } from '@nestjs/common';
import { GamesService } from './games.service';
import { Game } from './schema/games.schema';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() game: Partial<Game>) {
    return this.gamesService.create(game);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }
}
