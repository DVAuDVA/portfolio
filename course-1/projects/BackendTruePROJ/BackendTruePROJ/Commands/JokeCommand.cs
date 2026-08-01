using ChatBot.Dtos;
using ChatBot.Repositories.Interfaces;
using Telegram.Bot;

namespace ChatBot.Commands
{
    public class JokeCommand : IBotCommand
    {
        public string Trigger => "/joke";

        public async Task ExecuteAsync(TelegramUpdate update, ITelegramBotClient bot, long chatId)
        {
            string joke = "Один сосед спрашивает другого:\n-Почему твоя кошка вчера так орала?\n-Я ее купал!\n-Но я тоже купаю свою кошку, она же молчит!\n-А ты ее выжимал?";

            await bot.SendTextMessageAsync(chatId, joke, cancellationToken: CancellationToken.None);
        }
    }
}