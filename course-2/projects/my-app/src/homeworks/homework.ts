/* ДЗ №1 */
console.log('__ДЗ №1__'); //npx tsx .\src\homework.ts

//Задача №1
console.log('');
console.log('/Задача №1');
let userName: string = 'Raven';
let userAge: number = 27;
let hasAccess: boolean = true;
console.log('Имя: ' +userName);
console.log('Возраст: ' +userAge);
console.log('Доступ разрешён: ' +hasAccess);

//Задача №2
console.log('');
console.log('/Задача №2');
const cities: cityType[] = [
{
    name: 'Кокшетау',
    population: 123456,
    isCapital: true,
},
{
    name: 'Сумкария',
    population: 92109,
    isCapital: false,
},
{
    name: 'Крусадия',
    population: 0,
    isCapital: true,
},
];
type cityType = {
    name: string;
    population: number;
    isCapital: boolean;
}

console.log(cities);
console.log(cities[0].name);
console.log(cities[1].population);

//Задача №3
console.log('');
console.log('/Задача №3');
function calculateTotal(price: number, quantity: number) {
    let amount: number = price * quantity;
    return amount;
}
console.log(calculateTotal(750, 4));
console.log('');