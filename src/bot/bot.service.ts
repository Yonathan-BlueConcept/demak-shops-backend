import { Injectable } from '@nestjs/common';
import { Bot } from 'src/core/bot_cmds';
import { botLauncher } from 'src/core/bot_launcher';
import { ItemDto } from './dtos/items.dto';
import { ItemsListDto } from './dtos/items_list.dto';
import { AppOwnerService } from 'src/app-owner/app-owner.service';

@Injectable()
export class BotService {
  private bot: Bot | null = botLauncher();

  constructor(private readonly appOwnerService: AppOwnerService) {
    this.bot.askPhoneNumber();
    this.bot.phoneNumberAccessSuccessful(this.appOwnerService);
  }


  async sendItem(item: ItemDto,chatId:number) {
    return await this.bot.sendItem(item,chatId)
  }


  async sendItems(item: ItemsListDto,chatId:number) {
    return await this.bot.sendItems(item,chatId)
  }

}
