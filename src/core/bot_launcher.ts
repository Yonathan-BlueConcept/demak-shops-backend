import { ConfigService } from '@nestjs/config';
import { BotService } from './bot_cmds';

export function launchBot(configService: ConfigService) {
  const botInstance = new BotService(configService);
  botInstance.onModuleInit();
  return botInstance;
}