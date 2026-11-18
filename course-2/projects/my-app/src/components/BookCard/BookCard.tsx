/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import type { bookType } from "../../types/book/book";
import type { bookRatingJokeType } from "../../types/book/bookRatingJokeType";

const CardProduct = styled.article`
    padding: 10px
    border: 1px solid #888
    border-radius: 5px;
`;

const TitleCard = styled.h3`
    color: #50E;
    font-size: 22px;
`;

const Status = styled.p<{isRead: boolean}>`
    color: ${({isRead}) => (isRead ? '#d2e' : '#e4f')};
    font-size: 26px;
`;

const Image = styled.img<{isRead: boolean}>`
    width: 320px;
    font-size: 26px;
    border: 10px solid transparent;
`;

/*
const Image = styled.img<{isRead: boolean}>`
    width: 320px;
    font-size: 26px;
    border: 10px solid transparent;
    border-image: linear-gradient(
        to left top,
        ${({isRead})} => (isRead ? '#70ff40' : '#d6f')},
        ${({isRead})} => (isRead ? '#70ff40' : '#d6f')},
    )
    1:
    border-image-slice: 1;
`;
*/

const Rating = styled.div<{rating: number}>`
    font size: 26px;
    color: ${({rating}) => {
        if (rating > 4) {
            return '#7f4';
        } else if (rating > 2) {
            return '#fc4';
        } else {
            return '#f46';
        }
    }}
`;

export interface BookCardProps {
    book: bookType;
    deleteBook: (id: number) => void;
}

const bookStatus = {
    read: 'Прочитано',
    inProcess: 'В процессе чтения',
    planned: 'Запланировано',
}

const bookRatingJokeR: bookRatingJokeType =
{
    Smooth5: "Дочитал? Время писать гневный отзыв!",
    Higher4: "Жду хвалебных отзывов или гнева, ни слова о среднем, попкорн уже у меня, я весь во внимании.)",
    Higher3: "Прочёл? Прекрасно, кнопка удалить ниже, выглядит как Великий Хаос(.!.!.)",
    Higher2: "Милорд, вам совсем нечего было читать?.. ну, вот, вообще?..",
    Higher1: "Вы прочли это... ну, я вызову к вам реанимацию... на всякий случай...",
    Higher0: "Да. ЗАЧЕМ исправлять ошибку, если над ней можно шутки надстраивать мегатоннами, молодец, весь в себя.",
}

const bookRatingJokePIP: bookRatingJokeType =
{
    Smooth5: "Какой прекрасный рейтинг, а давай найдём причину его понизить?",
    Higher4: "ЧИТАЙ! Рейтинг выше 4-ёх звёзд!",
    Higher3: "Рейтинг спорный, дела плохи.",
    Higher2: "Мож не надо, ты видел рейтинг? Мы этого не потянем...",
    Higher1: "Прошу, СТОЙ, ОДУМАЙСЯ! Не смотри на это!!",
    Higher0: "Милорд, у этой сущности рейтинг ниже единицы, вы чем сайт кордили?",
}

export function BookCard({ book, deleteBook }: BookCardProps) {
    const bookRatingTextR =
    book.rating == 5 ? bookRatingJokeR.Smooth5 :
        (book.rating >= 4 ? bookRatingJokeR.Higher4 :
            (book.rating >= 3 ? bookRatingJokeR.Higher3 :
                (book.rating >= 2 ? bookRatingJokeR.Higher2 :
                    (book.rating >= 1 ? bookRatingJokeR.Higher1 :
                        (bookRatingJokeR.Higher0)))));
    const bookRatingTextPIP =
    book.rating == 5 ? bookRatingJokePIP.Smooth5 :
        (book.rating >= 4 ? bookRatingJokePIP.Higher4 :
            (book.rating >= 3 ? bookRatingJokePIP.Higher3 :
                (book.rating >= 2 ? bookRatingJokePIP.Higher2 :
                    (book.rating >= 1 ? bookRatingJokePIP.Higher1 :
                        (bookRatingJokePIP.Higher0)))));

    const bookRatingTextChoose = (book.status == 'read' ? <p>{bookRatingTextR}</p> : (<p>{bookRatingTextPIP}</p> ));
    
    const bookRatingText = <p>{bookRatingTextChoose}Рейтинг: {book.rating}★!</p>;

    const bookStatusText =
    book.status == 'read' ? true : false;

    const rating = Number(book.rating) ?? 0;
    const stars = '$'.repeat(rating);

    return (
        <CardProduct>
            
            <Image isRead={bookStatusText} src={book.cover} alt={book.title}/>
            <TitleCard>{book.title}</TitleCard>
            <h4>{book.author}</h4>
            <Rating rating={book.rating}>
            <Status isRead={bookStatusText}>{bookStatus[book.status]}</Status>
            {bookRatingText}
            <div>{stars}</div>
            </Rating>
            {book.note && <p>{book.note}</p>}
            <button onClick={() => deleteBook(book.id)}>^-ΧΑΩΣ-^</button>
        </CardProduct>
    );
}