import { Injectable } from '@nestjs/common';
import { Bot } from 'src/core/bot_cmds';
import { ItemDto } from './dtos/items.dto';
import { ItemsListDto } from './dtos/items_list.dto';
import { studentDetail } from 'src/edu/dto/student_deatil';
import { studentAction } from 'src/edu/dto/student_action';

@Injectable()
export class BotService {
  constructor(private readonly bot: Bot) { }

  async sendItem(item: ItemDto, chatId: number) {
    return await this.bot.sendItem(item, chatId);
  }

  async sendItems(item: ItemsListDto, chatId: number) {
    return await this.bot.sendItems(item, chatId);
  }

  async sendStudentDetail(studentDetail: studentDetail) {
    return await this.bot.sendStudentDetail(studentDetail);
  }

  async sendStudentAction(studentAction: studentAction) {
    return await this.bot.sendStudentAction(studentAction);
  }
}