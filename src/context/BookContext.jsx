import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getReadListFromLocalDB } from '../utils/LocalDB';
import { addWishListToLocalDB, getWishListFromLocalDB } from '../utils/LocalDBforWishList';

export const BookContext = createContext()


const BookProvider = ({ children }) => {
      const [storedBooks, setStoredBooks] = useState(()=>getReadListFromLocalDB());

    const [wishedBooks, setWishedBooks] = useState(()=>getWishListFromLocalDB())
    // console.log(expectedBook);
    
    // useEffect(() => {
    //     const getReadListsFromLocalDB = getReadListFromLocalDB();
    //     console.log(getReadListsFromLocalDB, "getReadListsFromLocalDB");
    // }, [])
    

    const handleMarkRead = (currentBook) => {
          addReadListToLocalDB(currentBook)
        const existedBooks = storedBooks.find(
          (book) => book.bookId === currentBook.bookId,
          );
          

        if (existedBooks) {
          toast.error("The book is already exist in your read list");
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to your read list`)
        }
        // console.log("bookId", storedBooks, bookId);
    };
    

    const handleWishedList = (currentBook) => {
        addWishListToLocalDB(currentBook)
        console.log(currentBook);
        
        
        const isExistInWishList = storedBooks.find(book=>book.bookId === currentBook.bookId)

        if (isExistInWishList) {
            toast.error("This book is already in your read list")
            return
        }

        const existedBooks = wishedBooks.find(
          (book) => book.bookId === currentBook.bookId,
        );

        if (existedBooks) {
          toast.error("The book is already exist in your wishlist");
        } else {
            setWishedBooks([...wishedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to your wishlist`)
        }
        // console.log("bookId", storedBooks, bookId);
      };
    const data = {
        storedBooks, setStoredBooks, handleMarkRead, wishedBooks, setWishedBooks, handleWishedList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
}
export default BookProvider;
