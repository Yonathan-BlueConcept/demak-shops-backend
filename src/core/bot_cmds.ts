import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Markup, Telegraf } from 'telegraf';
import { ItemDto } from 'src/bot/dtos/items.dto';
import { ItemsListDto } from 'src/bot/dtos/items_list.dto';
import { studentDetail } from 'src/edu/dto/student_deatil';
import { studentAction } from 'src/edu/dto/student_action';

@Injectable()
export class Bot implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(Bot.name);
  private readonly bot: Telegraf;

  constructor(private readonly configService: ConfigService) {
    const token = this.configService.get<string>('BOT_TOKEN');

    if (!token) {
      throw new Error('BOT_TOKEN is not defined in the environment variables.');
    }

    this.bot = new Telegraf(token);
    this.registerHandlers();
  }

  async onModuleInit() {
    this.bot.launch();
    this.logger.log('Telegram Bot successfully launched.');
  }

  onModuleDestroy() {
    this.bot.stop();
    this.logger.log('Telegram Bot stopped.');
  }

  private registerHandlers() {
    this.bot.command('start', (ctx) => {
      this.logger.log(`Start command triggered by Chat ID: ${ctx.chat.id}`);
      return ctx.reply(
        'እባክዎ ስልክዎን እንድመዘግብ ይፍቀዱልኝ 😊',
        Markup.keyboard([Markup.button.contactRequest('ስልኬን መዝግብ')])
          .resize()
          .oneTime()
      );
    });
  }

  async sendItem(item: ItemDto, chatId: number) {
    const message = `
በደንበኛዎ የታዘዘ እቃ

title: ${item.title}
price: ${item.price}
ownerName: ${item.ownerName}
    `.trim();

    return await this.bot.telegram.sendMessage(chatId, message);
  }

  async sendStudentDetail(studentDetail: studentDetail) {
    const message = `
የተማሪ ዝርዝር

ስም: ${studentDetail.studentName}
ስልክ ቁጥር: ${studentDetail.phoneNumber}
ትምህርት ቤት: ${studentDetail.schoolName}
የትምህርት ስም: ${studentDetail.courseTitle}
    `.trim();

    return await this.bot.telegram.sendMessage('449678878', message);
  }

  async sendStudentAction(studentAction: studentAction) {
    const message = `
Student's Action
Action Type: ${studentAction.clickType}
School Name: ${studentAction.schoolName}
    `.trim();

    return await this.bot.telegram.sendMessage('449678878', message);
  }

  async sendItems(itemsList: ItemsListDto, chatId: number) {
    const itemsFormatted = itemsList.items
      .map((item) => `title: ${item.title}\nprice: ${item.price}\n------------------------------`)
      .join('\n');

    const message = `
በደንበኛዎ የታዘዙ እቃዎች

${itemsFormatted}

phoneNumber: ${itemsList.phoneNumber} 👈 ይህን ስልክ ተጭነው ያናግሩ
    `.trim();

    return await this.bot.telegram.sendMessage(chatId, message);
  }
}