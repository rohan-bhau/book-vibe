import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
      const { setStoredBooks, storedBooks } = useContext(BookContext);
      console.log(setStoredBooks, storedBooks);
    return (
        <div>
            Books
        </div>
    );
}

export default Books;
