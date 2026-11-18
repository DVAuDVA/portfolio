import type { bookType } from "../types/book/book";

export const initialBooks: bookType[] = [
    {
        id: 0,
        author: "Говард Лавкрафт",
        title: "Зов Ктулху",
        status: 'read',
        rating: 4.4,
        note: "Сначала лучше прочтите «Тень над инсмутом». Мы не продаём «Тень над инсмутом».",
        cover: "https://content.img-gorod.ru/pim/products/images/ec/09/019b3700-5f61-765f-940e-f259b68dec09.jpg",
    },
    {
        id: 1,
        author: "Дионисий Ареопагит",
        title: "О небесной иерархии",
        status: 'planned',
        rating: 4.7,
        note: "Аллах! Бог наш и ца- стой, это не та книга!",
        cover: "https://criminal_scam.ussr",
    },
    {
        id: 2,
        author: "Найт Шьямалан",
        title: "Повелитель стихий: Последний маг воздуха",
        status: 'planned',
        rating: 5.0,
        note: "Когда-то давно народы Тейвата жили в мире, но всё изменилось когда пятеро грешников заполучили запретное знание безд... упс, перепутал сценарий.",
        cover: "https://i.pinimg.com/736x/a6/98/34/a6983475da5d09edcbfa9dbf627f1401.jpg",
    },
    {
        id: 3,
        author: "Скотт Коутон",
        title: "Five Night's at Freddy's: Серебрянные глаза",
        status: 'inProcess',
        rating: 1.1,
        note: "И помните, дети: существует только 4 игры по фнафу. Ведь в ином случае, во франшизе фнафа существует как минимум 4 трапа.",
        cover: "https://avatars.mds.yandex.net/get-mpic/4219828/img_id2552663039866390709.jpeg/orig",
    },
];