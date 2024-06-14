require("dotenv").config();
import telegram from "node-telegram-bot-api";
const token = String(process.env.BOT_TOKEN);
const bot = new telegram(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  // const webAppUrl = `https://t.me/moon_loves_bot/factoright`;
  const webAppUrl = `https://goldfish-app-uylb3.ondigitalocean.app/`;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open Web Task app",

            web_app: { url: webAppUrl },
          },
        ],
      ],
    },
  };
  bot.sendMessage(chatId, "Web appni ochish", options);
});
