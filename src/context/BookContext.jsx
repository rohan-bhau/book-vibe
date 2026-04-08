import React, { createContext, useState } from 'react';

export const BookContext = createContext()


const BookProvider = ({ children }) => {
      const [storedBooks, setStoredBooks] = useState([]);

      // console.log(expectedBook);

      const handleMarkRead = (currentBook) => {
        const existedBooks = storedBooks.find(
          (book) => book.bookId === currentBook.bookId,
        );

        if (existedBooks) {
          alert("The book is already exist");
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} is added to your list`)
        }
        // console.log("bookId", storedBooks, bookId);
      };
    const data = {
        storedBooks, setStoredBooks, handleMarkRead
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
}
export default BookProvider;
