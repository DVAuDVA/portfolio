using ChatBot.Dtos;
using Telegram.Bot;

namespace ChatBot.Repositories.Interfaces
{
    public interface IBotCommand
    {
        string Trigger { get; }
        Task ExecuteAsync(TelegramUpdate update, ITelegramBotClient bot, long chatId);

    }
}