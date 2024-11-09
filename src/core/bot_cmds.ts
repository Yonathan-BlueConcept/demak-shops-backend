import { Markup, Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import { ItemDto } from 'src/bot/dtos/items.dto';
import { ItemsListDto } from 'src/bot/dtos/items_list.dto';
import { AppOwnerService } from 'src/app-owner/app-owner.service';



dotenv.config();


const bot = new Telegraf("7344809048:AAEZ56dA3ZJMyUBnbEX6FbKhHm05e28oAHY");

export class Bot {


  botLaunch() {
    bot.launch();
  }


  async sendItem(item: ItemDto,chatId:number) {

    const sendResult = await bot.telegram.sendMessage(chatId, `
    client wants to buy the following things
    title:  ${item.title}
    price:  ${item.price}
    phoneNumber: ${item.phoneNumber}
    `);

    return sendResult;
  }


  async sendItems(itemsList: ItemsListDto,chatId:number) {

    const titleAndPrice = [];

    itemsList.items.forEach((item) => {
      titleAndPrice.push(`
        title:  ${item.title}
        price:  ${item.price}
    ------------------------------
    `)
    })


    const sendResult = await bot.telegram.sendMessage(chatId, `
      client wants to buy the following things
      
      ${titleAndPrice}
      phoneNumber: ${itemsList.phoneNumber}
      `);

    return sendResult;
  }


  async askPhoneNumber() {
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

  async phoneNumberAccessSuccessful(appOwnerService: AppOwnerService) {
    bot.on('contact', async (ctx) => {
      const phoneNumber = ctx.message.contact.phone_number;
      const chatId = ctx.chat.id;
      ctx.reply(`Thank you! Your phone number is: ${phoneNumber}`);

      console.log("chat Id ", chatId);
      console.log("Phone number ", phoneNumber);
      try {
        const result = await appOwnerService.updateChatId(phoneNumber, chatId);
        console.log("update result .. ", result)
      } catch (error) {
        console.log("Errro ... ", error)
      }




      // You can save the phone number or use it as needed
    });
  }




  botStop() {
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  }



}
