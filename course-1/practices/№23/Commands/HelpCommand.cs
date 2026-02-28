using Telegram.Bot;
using Telegram.Bot.Types;

namespace ScheduleBot.Commands;

public class HelpCommand : ICommand
{
   public async Task ExecuteAsync(Update update, ITelegramBotClient botClient, CancellationToken ct)
   {
       var chatId = update.Message!.Chat.Id;
       string text = "Доступные команды:\n" +
                     "/start - приветствие.\n" +
                     "/help - помощь.\n" +
                     "/week [group] - расписание на неделю определённого класса обучения.\n"
                     "/today - расписание на сегодня.";

       await botClient.SendTextMessageAsync(chatId, text, cancellationToken: ct);
   }
}