import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BotService } from './bot.service';
import { ItemDto } from './dtos/items.dto';
import { ItemsListDto } from './dtos/items_list.dto';
import { IdentityApiKeyGuard } from 'utils/security/identity-api-gurad';

@Controller('bot')
@UseGuards(IdentityApiKeyGuard)
export class BotController {

    constructor(private readonly botService: BotService) { }

    @Post('/send-item')
    sendItemsList(@Body() itemDto: ItemDto,) {
        return this.botService.sendItem(itemDto);
    }

    @Post('/send-items')
    sendItems(@Body() itemList: ItemsListDto,) {
        
        return this.botService.sendItems(itemList)
    }


    // @Get('/ask-phone-number')
    // askPhoneNumber(){
    //     return this.botService.askPhoneNumber();
    // }

}
