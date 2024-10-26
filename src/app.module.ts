import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './bot/bot.module';
import { ShopItemModule } from './shop-item/shop-item.module';

@Module({
  imports: [BotModule, ShopItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
