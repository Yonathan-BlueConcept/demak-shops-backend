import { Markup, Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import { ItemDto } from 'src/bot/dtos/items.dto';
import { ItemsListDto } from 'src/bot/dtos/items_list.dto';



dotenv.config();


const bot = new Telegraf("7344809048:AAEZ56dA3ZJMyUBnbEX6FbKhHm05e28oAHY");

const devin: number = 5780320415;
const yoni: number = 449678878;

export class Bot {


  botLaunch() {
    bot.launch();
  }


  async sendItem(item: ItemDto) {

    const sendResult = await bot.telegram.sendMessage(devin, `
    client wants to buy the following things
    title:  ${item.title}
    price:  ${item.price}
    phoneNumber: ${item.phoneNumber}
    `);

    return sendResult;
  }


  async sendItems(itemsList: ItemsListDto) {

    const titleAndPrice = [];

    itemsList.items.forEach((item) => {
      titleAndPrice.push(`
        title:  ${item.title}
        price:  ${item.price}
    ------------------------------
    `)
    })


    const sendResult = await bot.telegram.sendMessage(devin, `
      client wants to buy the following things
      
      ${titleAndPrice}
[${itemsList.phoneNumber}](tel:${itemsList.phoneNumber})
      `, { parse_mode: "MarkdownV2" });

    return sendResult;
  }




  // I can get the chatId of the Shop owner when he/she send me any text message
  // I think I should save it to the database and prevent or ignore any other  requests
  async getChatId() {
    bot.on('text', (ctx) => {
      console.log("Chat ID:", ctx.chat.id); // Log the chat ID to use later
      ctx.reply("Chat ID saved.");
    });
  }

  async getPhoneNumber() {
    bot.command('start', (ctx) => {
      console.log("Chat ID:", ctx.chat.id);
      ctx.reply(
        'Please share your phone number with me:',
        Markup.keyboard([
          Markup.button.contactRequest('Share my phone number'),
        ])
          .resize()
          .oneTime()
      );
    }

    );
  }

  async phoneNumberAccessSuccessful() {
    bot.on('contact', (ctx) => {
      const phoneNumber = ctx.message.contact.phone_number;
      ctx.reply(`Thank you! Your phone number is: ${phoneNumber}`);
      // You can save the phone number or use it as needed
    });
  }




  botStop() {
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  }



}
