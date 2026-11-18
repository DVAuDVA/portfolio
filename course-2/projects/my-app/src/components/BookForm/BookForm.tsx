import styled from '@emotion/styled'
import { useState, type FormEvent } from 'react';
import type { bookStatusType, bookType } from '../../types/book/book';

const Form = styled.form`
    flex-direction: column;
    display: flex;
    gap: 8px;
    max-width: 400px;
`;

const TitleForm = styled.h2`
    color: #77ca77;
    font-size: 26px;
`;

const Label = styled.label``;
const Textarea = styled.textarea`
    color: #BB0000;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #77ca77;
    border-radius: 5px;
    color: #77ca77
`;

interface BookFormProps {
    addBook: (book: Omit<bookType, 'id'>) => void;
}

export function BookForm({addBook}: BookFormProps) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState<bookStatusType>('planned');
    const [rating, setRating] = useState(NaN);
    const [cover, setCover] = useState('');
    const [error, setError] = useState('')

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (rating > 5) (setError('Бесконечность - НЕ ПРЕДЕЛ!! (предел - 5)'));
        if (rating < 0) (setError('А давай я текст тоже отрицательным сделаю?'));

        if (5 < rating || rating < 0) return;

        addBook({
            author,
            title,
            status,
            rating,
            note,
            cover,
        });
        
        setTitle('');
        setAuthor('');
        setNote('');
        setStatus('planned');
        setRating(NaN);
        setCover('');
        setError('');
    }

    return (
    <Form onSubmit={handleSubmit}>
        <TitleForm>Форма добавления</TitleForm>
        <textarea
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Введите название книги. Пример: «История о том, как я писал название книги сидя у компьютера 20 минут реального времени и умер от сердечного приступа вызванного осенением, но реинкарнировался в главного героя этой книги (книга была по FNaF-у).»"
        />
        <Label>
            <Input
                value={author}
                onChange={e => setAuthor(e.target.value)}
                type="text"
                placeholder="Автор этой книги уходит под юрисдикцию фонда спидвагона."
            />
        </Label>
        <Label>
            <Input
                value={cover}
                onChange={e => setCover(e.target.value)}
                type="text"
                placeholder="Сылку на бложку! \(/ _\)/ Пример: «https://criminal_scam.ussr»."
            />
        </Label>
        <Label>
            <Input
                value={rating}
                onChange={e => setRating(e.target.valueAsNumber)}
                type="number"
                placeholder="Рейтинг: можно в дробях. Главное - запятая."
            />
        </Label>
        <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Комментарии сюда. «Не знамо, что писать? - Пиши анекдот про трёх патологоанатомов»."
        />
        <select onChange={e => setStatus(e.target.value as bookStatusType)}>
            <option value='planned'>В планах</option>
            <option value='inProcess'>В процессе</option>
            <option value='read'>Прочитано</option>
        </select>
            <Textarea
                value={error}
                onChange={e => setError(e.target.value)}
                placeholder="АБСОЛЮТНЫЙ КОСТЫЛЬ, строка для ошибок. Не пишите сюда ничего."
            />
        <button type = 'submit'>A FINE ADDITION TO MY COLLECTION.</button>
    </Form>
)};