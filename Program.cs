public class Bookend
{
public string Author { get; set; } // Было: AuthorE — исправлено на Author
public int Sheets { get; set; } // Было: Sheats (опечатка) — исправлено на Sheets
public string Title { get; set; }

// Конструктор по умолчанию
public Bookend()
{
Author = "Чёрт знает)))";
Sheets = 1;
Title = "Жила была книга. Конец.";
}

// Конструктор с названием книги
public Bookend(string title)
{
Author = "Авторов бесконечное множество)";
Sheets = 1;
Title = title;
}

// Конструктор с названием и автором
public Bookend(string title, string author)
{
Author = author;
Sheets = -666; // Да, можно и отрицательные, но это уже философия :)
Title = title;
}

// Полный конструктор
public Bookend(string title, string author, int sheets)
{
Author = author;
Sheets = sheets;
Title = title;
}

// Метод вывода информации
public void PrintInfo()
{
Console.WriteLine($"Ревизия: {Title}");
Console.WriteLine($"Производитель: {Author}");
Console.WriteLine($"Сколько страниц в этом произведении потратили на написание одного слова: {Sheets}");
}

// Точка входа в программу
public static void Main()
{
var b1 = new Bookend();
var b2 = new Bookend("XYZ");
var b3 = new Bookend("Что-то с чем-то", "Люди");
var b4 = new Bookend("Худшие", "Лучшие", 0); // Ошибка: было (0, "Лучшие") — перепутаны типы

b1.PrintInfo();
Console.WriteLine("---");
b2.PrintInfo();
Console.WriteLine("---");
b3.PrintInfo();
Console.WriteLine("---");
b4.PrintInfo();
}
}



public class Animal
{
    public string Name {get; set;}
    public void Eat()
    {
        Console.WriteLine("Где {Name}");
    }
}

public class Cat : Animal
{
    public void Meow()
    {
        Console.WriteLine("Кшк");
    }
}

public class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("Собака лает");
    }
}

class Program
{
    static void Main()
    {
        var cat = new Cat();
        cat.Name = "ee"
        cat.Eat();
        cat.Meow();

        var dog = new Dog();
        dog.Name = "яя"
        dog.Eat();
        dog.Bark();
    }
}

//Мне так лень создавать отдельные файлы для каждого задания... (/_\)
double c;
Console.WriteLine("Бродоп жоаловать на тестовый полигон №1, данный объект посвящён вычислению температуры по шкале фаренгейта путём конвертации введённой (вами) температуры по шкале цельсия. Приступим к работе:");
Console.ReadLine("Введите температуру в градусах цельсия (можно десятичной дробью): " ());
double f = c * 9 / 5 + 32;
Console.WriteLine("Заданная вами температура по шкале фаренгейта будет соответствовать значению " + f);

Console.WriteLine("Бродоп жоаловать на тестовый полигон №2, данный объект посвящён поиску среднего арифметического 3-ёх введённых вами чисел. Приступим к работе:");
double x = Console.ReadLine("Введите первое число: " ());
double y = Console.ReadLine("Введите второе число: " ());
double z = Console.ReadLine("Введите третье число: " ());
if (x == y && y == z)
{
    Console.WriteLine("Оу, вау! Вы меня озадачили. Хммм... даже не знаю... может быть... " + x + "или... может " + y + "... хотя нет, я думаю " + z " идеально сойдёт!");
}
else
{
    double nox = (x + y + z) / 3
    Console.WriteLine("Среднее арифметическое равняется " + nox)
}

Console.WriteLine("Бродоп жоаловать на тестовый полигон №3, данный объект посвящён поиску суммы, разности, произведения и частного 2-ух введённых вами чисел. Приступим к работе:");











public abstract class Shape
{
    public abstract string Name {get; set;}
    public abstract double GetArea();
    public void Print() => Console.WriteLine("площадь объекта " + Name + " равняется: " + GetArea());
}

public class Circle : Shape
{
    public double Radius {get; set;}
    public Circle(double radius) => Radius = radius;
    public override string Name => "Круг";
    public override double GetArea() => Math.PI * Radius * Radius;
}

public double Rectangle : Shape
{
    public double Width {get; set;}
    public double Height {get; set;}
    public override string Name => "Прямоугольник";
    public override double GetArea() => Width * Height;
}

class Program
{
static void Main()
{
Shape[] shapes =
{
new Circle(5),
new Rectangle(4, 6),
new Circle(3),
new Rectangle(2.5, 8)
};
foreach (var shape in shapes)
{
shape.Print();
}
}
}

public abstract class Animal
{
    public string Name {get; set;}
    public Animal (string name)
    {
        Name = name;
        Console.WriteLine("Создано животное:" + Name);
    }

    public void Eat()
    {
        Console.WriteLine(Name + " пожирает миры.");
    }

    public abstract void MakeSound()
    {
        
    }
}


public abstract class Animal
{
    public virtual void Speak();
    {
        Console.WriteLine("Вы слышите грохот в 180 децибел из желудка этого создания (Это приказ).");
    }
}

public class Dog : Animal
{
    public override void Speak();
    Console.WriteLine("Devouver of Gods (DoG) was approached");
}

public class Cat : Animal
{
    public override void Speak();
    Console.WriteLine("Грохот усилился, когда вы приблизились к коту. Вы понимаете, что вы не выйдете от сюда, если не покормите его.");
}

public class Cow : Animal
{
    public override void Speak();
    Console.WriteLine("Корова мучит (от слов мычит и мучает)");
}

class Program
{
static void Main()
{
    animal = new Animal();
Animal dog = new Dog();
Animal cat = new Cat();
Animal cow = new Cow();

animal.Speak();
dog.Speak();
cat.Speak();
cow.Speak();
}
}

public abstract class Animal
{
public virtual void Speak()
{
Console.WriteLine("Вы слышите грохот в 180 децибел из желудка этого создания (Это приказ).");
}
}

public class Dog : Animal
{
public override void Speak() {
Console.WriteLine("Devouver of Gods (DoG) was approached");
}
}

public class Cat : Animal
{
public override void Speak()
{
Console.WriteLine("Грохот усилился, когда вы приблизились к коту. Вы понимаете, что вы не выйдете от сюда, если не покормите его.");
}
}

public class Cow : Animal
{
public override void Speak()
{
Console.WriteLine("Корова мучит (от слов мычит и мучает)");
}
}

class Program
{
static void Main()
{
Animal dog = new Dog();
Animal cat = new Cat();
Animal cow = new Cow();

dog.Speak();
cat.Speak();
cow.Speak();
}
}



public abstract class Character
{
    public string name {get; set;}
    public abstract void Attack();
}

public class Warrior : Character
{
    public override void Attack()
    {
        Console.WriteLine("Воин атакует мячом! Вы чувуствуете запах пляжного баскетбола.");
    }
}

public class Mage : Character
{
    public override void Attack()
    {
        Console.WriteLine("Вы чувствуете запах гари. Приближается огненная атака мага! *Мимо вас пролетает горящая книга под крики ДОЛОЙ ДОМАШКУ*");
    }
}

public class Archer : Character
{
    public override void Attack()
    {
        Console.WriteLine("Лучник перезаряжается, вы можете его атаковать. Вы видите как он натягивает арку от соседнего здания на тетиву. Не важно как, почему и зачем. Бегите. (Arch - арка с английского, archer - лучник, арочник)");
    }
}

class Program
{
static void Main()
{
Character warrior = new Warrior();
Character mage = new Mage();
Character archer = new Archer();

warrior.Attack();
mage.Attack();
archer.Attack();
}
}