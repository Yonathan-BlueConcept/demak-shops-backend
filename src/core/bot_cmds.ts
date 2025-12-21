import { Markup, Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import { ItemDto } from 'src/bot/dtos/items.dto';
import { ItemsListDto } from 'src/bot/dtos/items_list.dto';
import { studentDetail } from 'src/edu/dto/student_deatil';
// import { AppOwnerService } from 'src/app-owner/app-owner.service';
import { studentAction } from 'src/edu/dto/student_action';



dotenv.config();


const bot = new Telegraf("7344809048:AAEZ56dA3ZJMyUBnbEX6FbKhHm05e28oAHY");

export class Bot {


  botLaunch() {
    bot.launch();
  }


  async sendItem(item: ItemDto, chatId: number) {

    const sendResult = await bot.telegram.sendMessage(chatId, `
    በደንበኛዎ የታዘዘ እቃ

    title:  ${item.title}
    price:  ${item.price}
    ownerName: ${item.ownerName}
    `);

    return sendResult;
  }

  async sendStudentDetail(studentDetail: studentDetail) {

    const sendResult = await bot.telegram.sendMessage(process.env.CHAT_ID, `
    የተማሪ ዝርዝር

    ስም: ${studentDetail.studentName}
    ስልክ ቁጥር: ${studentDetail.phoneNumber}
    ትምህርት ቤት: ${studentDetail.schoolName}
    የትምህርት ስም: ${studentDetail.courseTitle}
    `);

    return sendResult;
  }

async sendStudentAction(studentAction: studentAction) {

    const sendResult = await bot.telegram.sendMessage(process.env.CHAT_ID, `
    Student's Action
    Action Type: ${studentAction.clickType}
    School Name: ${studentAction.schoolName}
    `);

    return sendResult;
  }

  async sendItems(itemsList: ItemsListDto, chatId: number) {

    const titleAndPrice = [];

    itemsList.items.forEach((item) => {
      titleAndPrice.push(`
        title:  ${item.title}
        price:  ${item.price}
    ------------------------------
    `)
    })


    const sendResult = await bot.telegram.sendMessage(chatId, `
      በደንበኛዎ የታዘዙ እቃዎች
      
      ${titleAndPrice}

      phoneNumber: ${itemsList.phoneNumber} 👈 ይህን ስልክ ተጭነው ያናግሩ
      `);

    return sendResult;
  }


  async askPhoneNumber() {
    bot.command('start', (ctx) => {
      console.log("Chat ID:", ctx.chat.id);
      ctx.reply(
        'እባክዎ ስልክዎን እንድመዘግብ ይፍቀዱልኝ 😊',
        Markup.keyboard([
          Markup.button.contactRequest('ስልኬን መዝግብ'),
        ])
          .resize()
          .oneTime()
      );
    }

    );
  }

  // async phoneNumberAccessSuccessful(appOwnerService: AppOwnerService) {
  //   bot.on('contact', async (ctx) => {
  //     const phoneNumber = ctx.message.contact.phone_number;
  //     const chatId = ctx.chat.id;


  //     console.log("chat Id ", chatId);
  //     console.log("Phone number ", phoneNumber);
  //     try {
  //       const result = await appOwnerService.updateChatId(phoneNumber, chatId);
  //       if (result) {
  //         ctx.reply(`አመሰግናለሁ, ተመዝግበዋል: ${phoneNumber}`);
  //       }
  //     } catch (error) {
  //       ctx.reply(`አልተመዘገቡም። አገልግሎቱን ለማግኘት  በዚህ ቁጥር በመደወል መመዝገብ ይችላሉ፡፡ +251931726281`);
  //       console.log("Errro ... ", error)
  //     }




  //     // You can save the phone number or use it as needed
  //   });
  // }




  botStop() {
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  }



}
