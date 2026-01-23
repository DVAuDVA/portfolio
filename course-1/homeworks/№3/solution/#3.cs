Console.WriteLine("Бродоп жоаловать на тестовый полигон №3, данный объект посвящён поиску суммы, разности, произведения и частного 2-ух введённых вами чисел. Приступим к работе:");
double x = Console.ReadLine("Введите первое число - x: " ());
double y = Console.ReadLine("Введите второе число - y: " ());

double summ = x + y;
double difx = x - y;
double dify = -1 * difx;
double prod = x * y;
double divx = x / y;
double divy = y / x;

Console.WriteLine($"Сумма чисел равна: {summ}.");
Console.WriteLine($"Разность x - y равна: {difx}; а разность y - x равна: {dify}.");
Console.WriteLine($"Произведение равно: {prod}.");
Console.WriteLine($"Частное x / y равно: {divx}; а частное y / x равно: {divy}.");