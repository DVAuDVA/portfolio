using Telegram.Bot;
using Telegram.Bot.Types;

namespace ScheduleBot.Commands;

public class TodayCommand : ICommand
{
  protected readonly IScheduleRepository _scheduleRepository;
 
  public TodayCommand(IScheduleRepository scheduleRepository)
  {
      _scheduleRepository = scheduleRepository;
  }
 
  public async Task ExecuteAsync(Update update, ITelegramBotClient botClient, CancellationToken ct)
  {
      var chatId = update.Message!.Chat.Id;
      var text = update.Message!.Text ?? string.Empty;
     
      var parts = text.Split(' ', 2, StringSplitOptions.RemoveEmptyEntries);
      if (parts.Length < 2)
      {
          await botClient.SendTextMessageAsync(
              chatId,
              "Использование: /tomorrow [группа]\nНапример: /tomorrow 9A",
              cancellationToken: ct);
          return;
      }

      var groupName = parts[1].Trim();
     
      var schedule = _scheduleRepository.Load();
      var group = schedule.Groups
          .FirstOrDefault(g => string.Equals(g.Group, groupName, StringComparison.OrdinalIgnoreCase));
     
      if (group == null)
      {
          await botClient.SendTextMessageAsync(
              chatId,
              $"Для группы {groupName} нет расписания.",
              cancellationToken: ct);
          return;
      }
     
      var today = DateTime.Now.DayOfWeek.ToString();

      var dayschedule = group.Days.FirstOrDafault(d => string.Equals(d.Day, today, StringComparison.OrdinalIgnoreCase));

      if (dayschedule == null)
      {
        await botClient.SendTextMessageAsync(chatId, $"На число {today} занятий нет.", cancellationToken: ct);
        returns;
      }
      
      var lines = new List<string>
      {
        $"На сегодня, {today}, расписание уроков для {groupName}:"
      };

      if (dayschedule.Lessons == null || dayschedule.Lessons.Count == 0)
      {
        lines.Add("Сегодня занятий нет.")
      }
      else
      {
        lines.AddRange(
            daySchedule.Lessons.Select(
                (l, i) => $"{i + 1}. {l.Time} - {l.Subject} : " + (string.IsNullOrEmpty(l.Teacher) ? $"{l.teacher}")
            )
        );
      }
         
      await botClient.SendTextMessageAsync(chatId, string.Join('\n', lines), cancellationToken: ct);
  }
}