import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../../context/BookContext";

const BookDetail = () => {
  const params = useParams();
  // console.log("params", params.id);

  const books = useLoaderData();
  // console.log(books);
  const expectedBook = books.find((book) => book.bookId === Number(params.id));

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  const { handleMarkRead} = useContext(BookContext);
  // console.log(handleMarkRead, setStoredBooks, storedBooks);
  
  // const bookContext = useContext(BookContext)
  // console.log(bookContext);
  

  return (
    <div className="container mx-auto mt-13 grid grid-cols-1 md:grid-cols-2 gap-12 px-15">
      <div className="bg-[#131313]/5 p-20 rounded-xl flex justify-center items-center">
        <img
          className="rounded-xl h-[400px] md:h-[550px]"
          src={image}
          alt={bookName}
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">{bookName}</h2>
        <p className="text-[#131313]/80 font-semibold text-lg pb-6 border-b border-[#131313]/15 w-full">
          By: {author}
        </p>
        <p className="py-4 font-semibold  text-[#131313]/80 border-b border-[#131313]/15">
          {category}
        </p>

        <p className="py-6">
          <span className=" text-lg font-bold">Review: </span>
          <span className="text-[#131313]/70">{review}</span>
        </p>

        <div className="flex gap-4 pb-6 border-b border-[#131313]/15">
          <h2 className="text-lg font-bold">Tag</h2>
          <div className="flex items-center gap-3 ">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="badge bg-[#23BE0A]/5 text-[#23BE0A] font-semibold rounded-full mb-4 px-4 py-2"
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>
        <div className="flex  gap-17 pt-5 pb-3">
          <span className="text-[#131313]/70 text-lg">Number of Pages:</span>{" "}
          <h2 className="font-bold text-lg">{totalPages}</h2>
        </div>
        <div className="flex  gap-33 pb-3">
          <span className="text-[#131313]/70 text-lg">Publisher:</span>{" "}
          <h2 className="font-bold text-lg">{author}</h2>
        </div>
        <div className="flex  gap-15 pb-3">
          <span className="text-[#131313]/70 text-lg">Year Of Publishing:</span>{" "}
          <h2 className="font-bold text-lg">{yearOfPublishing}</h2>
        </div>
        <div className="flex  gap-38 pb-8">
          <span className="text-[#131313]/70 text-lg">Rating:</span>{" "}
          <h2 className="font-bold text-lg">{rating}</h2>
        </div>
        <div className="flex gap-4">
          <button onClick={()=>handleMarkRead(expectedBook)}
            className="btn  text-lg border-[#131313]/30 rounded-md px-7 py-4 font-bold">
            Read
          </button>
          <button className="btn rounded-md px-7 text-lg py-4 font-bold bg-[#50B1C9] text-white ">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
