import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './bot/bot.module';
import { ShopItemModule } from './shop-item/shop-item.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),BotModule, ShopItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
