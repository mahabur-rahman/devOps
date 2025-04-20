import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 👈 Make env variables available app-wide
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    GamesModule,
  ],
})
export class AppModule {}
