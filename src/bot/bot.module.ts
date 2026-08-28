import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { AppOwnerModule } from 'src/app-owner/app-owner.module';
import { Bot } from 'src/core/bot_cmds';

@Module({
  controllers: [BotController],
  providers: [BotService, Bot],
  imports: [AppOwnerModule]
})
export class BotModule { }
