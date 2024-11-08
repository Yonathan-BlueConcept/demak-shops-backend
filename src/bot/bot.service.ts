import { Injectable } from '@nestjs/common';
import { Bot } from 'src/core/bot_cmds';
import { botLauncher } from 'src/core/bot_launcher';
import { ItemDto } from './dtos/items.dto';
import { ItemsListDto } from './dtos/items_list.dto';

@Injectable()
export class BotService {
    private bot: Bot | null = botLauncher();

    constructor() {
        this.bot.getChatId();  
        this.bot.askPhoneNumber();
        this.bot.phoneNumberAccessSuccessful();
    }


      async sendItem(item:ItemDto) {
        return await this.bot.sendItem(item)
      }


      async sendItems(item:ItemsListDto) {
        return await this.bot.sendItems(item)
      }

      async askPhoneNumber(){
        return await this.bot.askPhoneNumber();
      }
}
