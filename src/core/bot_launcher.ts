import { Bot } from './bot_cmds';


export function botLauncher(): Bot {
  let botInstance: Bot | null = null;
  if (!botInstance) {
    botInstance = new Bot();

    botInstance.botLaunch();
    return botInstance;
  } else {
    console.log('Bot already running.');
  }
}
