import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { AppOwnerModule } from 'src/app-owner/app-owner.module';

@Module({
  controllers: [BotController],
  providers: [BotService],
  imports:[AppOwnerModule]
})
export class BotModule {}
