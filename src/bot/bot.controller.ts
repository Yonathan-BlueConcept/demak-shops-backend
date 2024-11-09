import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { BotService } from './bot.service';
import { ItemDto } from './dtos/items.dto';
import { ItemsListDto } from './dtos/items_list.dto';
import { IdentityApiKeyGuard } from 'utils/security/identity-api-gurad';

@Controller('bot')
@UseGuards(IdentityApiKeyGuard)
export class BotController {

    constructor(private readonly botService: BotService) { }

    @Post('/send-item/:chatId')
    sendItemsList(@Param('chatId') chatId:number, @Body() itemDto: ItemDto,) {
        return this.botService.sendItem(itemDto,chatId);
    }

    @Post('/send-items/:chatId')
    sendItems(@Param('chatId') chatId:number,@Body() itemList: ItemsListDto,) {
        
        return this.botService.sendItems(itemList,chatId)
    }
}
