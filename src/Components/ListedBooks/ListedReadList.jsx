import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import ListedBookCard from '../BookCard/ListedBookCard/ListedBookCard';

const ListedReadList = ({ sortedType }) => {
    const { storedBooks } = useContext(BookContext);
    let filteredReadList = storedBooks

    if (sortedType === "name") {
      filteredReadList = [...storedBooks].sort((a, b) =>
        a.bookName.localeCompare(b.bookName),
      );
    } else if (sortedType === "page") {
        filteredReadList = [...storedBooks].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
    }else if(sortedType ==="rating"){
      filteredReadList = [...storedBooks].sort(
        (a, b) => a.rating - b.rating,
      );
    }

  if (storedBooks.length === 0) {
    return (
      <div className="bg-[#131313]/10 py-40 text-center mt-8 rounded-xl">
        <h2 className="font-bold text-3xl text-[#131313]/70">
          Your Wishlist is Empty, <br />
          Please go home add books to Read list first
        </h2>
      </div>
    );
  }
  return (
    <div>
      {filteredReadList.map((book, idx) => (
        <ListedBookCard key={idx} book={book}></ListedBookCard>
      ))}
    </div>
  );
};

export default ListedReadList;
