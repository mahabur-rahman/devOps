import { Module, Controller, Get, Res } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesModule } from './games/games.module';
import { Response } from 'express';

@Controller()
class InlineHtmlController {
  @Get()
  getHtml(@Res() res: Response) {
    res.type('html').send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Inline HTML</title>
      </head>
      <body>
        <h1>Hello from inline HTML in AppModule!!!!!!!!</h1>
      </body>
      </html>
    `);
  }
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    GamesModule,
  ],
  controllers: [InlineHtmlController], // 👈 Add the inline controller
})
export class AppModule {}
