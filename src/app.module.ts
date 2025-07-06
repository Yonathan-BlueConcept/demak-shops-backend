import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotModule } from './bot/bot.module';
import { ShopItemModule } from './shop-item/shop-item.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppOwnerModule } from './app-owner/app-owner.module';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  },
  ), BotModule, ShopItemModule
    , MongooseModule.forRoot(process.env.MONGO_URI)
    , AppOwnerModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
