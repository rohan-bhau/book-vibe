import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetail/${book.bookId}`}
      className="card bg-base-100  shadow-sm border border-[#131313]/15 transform  hover:bg-base-200 transition duration-500 hover:scale-105"
    >
      <figure className="bg-[#f3f3f3] m-6 py-8 px-24 rounded-xl ">
        <img
          className="h-[166px] rounded-xl"
          src={book.image}
          alt={book.bookName}
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-3 ">
          {book.tags.map((tag, idx) => (
            <div
              key={idx}
              className="badge bg-[#23BE0A]/5 text-[#23BE0A] font-semibold rounded-full mb-4 px-4 py-2"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl">{book.bookName}</h2>
        <h3 className="font-semibold text-lg text-[#131313]/80 pb-5 border-b border-dashed border-[#131313]/15">
          {book.author}
        </h3>
        <div className="card-actions flex justify-between items-center mt-5">
          <div className="text-[#131313]/80 font-semibold text-[16px]">
            {book.category}
          </div>
          <div className="text-[#131313]/80 font-semibold text-[16px] flex items-center gap-2">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
