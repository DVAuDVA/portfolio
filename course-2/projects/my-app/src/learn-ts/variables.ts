import type { bookInterface, bookType, shadowUserType, themeType, userType } from "./types";

export let username: string = 'Peter'
export const isAdmin: boolean = true;
export let age: number = 105;

export const book: bookType = {
    id: 0,
    author: "Говард Лавкрафт",
    title: "Зов Ктулху",
    status: 'read',
    rating: "4.4",
    note: "Сначала лучше прочтите «Тень над инсмутом». Мы не продаём «Тень над инсмутом».",
    cover: "https://criminal_scam.ussr",
};

export const initialBooks: bookType[] = [
{
id: 0,
author: "Говард Лавкрафт",
title: "Зов Ктулху",
status: 'read',
rating: "4.4",
note: "Сначала лучше прочтите «Тень над инсмутом». Мы не продаём «Тень над инсмутом».",
cover: "https://criminal_scam.ussr",
},
{
id: 1,
author: "Дионисий Ареопагит",
title: "О небесной иерархии",
status: 'planned',
rating: "4.7",
note: "Аллах! Бог наш и ца- стой, это не та книга!",
cover: "https://criminal_scam.ussr",
},
{
id: 2,
author: "Найт Шьямалан",
title: "Повелитель стихий: Последний маг воздуха",
status: 'planned',
rating: "5.0",
note: "Когда-то давно народы Тейвата жили в мире, но всё изменилось когда пятеро грешников захватили запретное знание безд... упс, перепутал сценарий.",
cover: "https://criminal_scam.ussr",
},
{
id: 3,
author: "Скотт Коутон",
title: "Five Night's at Freddy's: Серебрянные глаза",
status: 'in-progress',
rating: "1.1",
note: "И помните, дети: существует только 4 игры по фнафу. Ведь в ином случае, во франшизе фнафа существует как минимум 4 трапа.",
cover: "https://criminal_scam.ussr",
},
];

export const students: string[] = [
    'Boreas',
    'Aegeaon',
    'Favonius',
    'Notus',
    'Volturnus',
]

export const user: userType = {
    name: 'Xeroc',
    age: 516,
    isAdmin: false,
}

export const userXc: userType = {
    name: 'Chaos',
    age: 3783,
    isAdmin: 'deus',
}

let theme: themeType = 'light';
theme = 'dark';

const agent: shadowUserType = {
    name: 'Bond',
    age: 51,
    isAdmin: true,
    hiddenIdentity: true
}