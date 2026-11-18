import './App.css'
import { useState } from 'react';
import { BookForm } from './components/BookForm/BookForm';
import { BookList } from './components/BookList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { initialBooks } from './data/books';
import type { bookType } from './types/book/book';

function App() {
  const [books, setBooks] = useState<bookType[]>(initialBooks);

  function deleteBook(id: number) {
    setBooks(booksArray => booksArray.filter(b => b.id != id));
  }

  function addBook(book: Omit<bookType, 'id'>) {
    const newBook: bookType = {
      id: new Date().getTime(),
      author: book.author,
      title: book.title,
      status: book.status,
      rating: book.rating,
      note: book.note,
      cover: book.cover,
  };

  setBooks(booksArray => [...booksArray, newBook])
}

return (
  <>
  <Header />
  <main>
    <h1>Welcome, to the BookstorNet, have a look around!</h1>
    <BookForm addBook={addBook}/>
    <BookList books={books} deleteBook={deleteBook}/>
  </main>
  <Footer />
  </>
);
}

export default App