import type { bookType } from "../types/book/book";
import { BookCard } from "./BookCard/BookCard";

interface BookListProps {
    books: bookType[];
    deleteBook: (id: number) => void;
}

export function BookList({books, deleteBook}: BookListProps) {
    const booksCount = books.length;
    const booksReadCounter = books.filter(book =>
        book.status == 'read' ? book : null,
    );

    return (
        <section>
            <h2>Ваши книги, милорд:</h2>
            <h4>
                Прочитано: {booksReadCounter.length} всего книг: {booksCount}.
            </h4>

            {books.length == 0 ? (
                <h3></h3>
            ) : (
                books.map(book => (
                    <div>
                        <BookCard
                            key={book.id}
                            book={book}
                            deleteBook={deleteBook}
                        />
                    </div>
                ))
                )}
        </section>
    );
}