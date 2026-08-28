import { ConfigService } from '@nestjs/config';
import { Bot } from './bot_cmds';

export function launchBot(configService: ConfigService) {
  const botInstance = new Bot(configService);
  botInstance.onModuleInit();
  return botInstance;
}

