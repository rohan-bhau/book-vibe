import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import frameImg from '../../../assets/books.png'
import { Link } from 'react-router';

const ListedBookCard = ({ book }) => {
    console.log(book);
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
      } = book;
    
    return (
      <div className=" flex gap-6 mt-8 shadow-sm p-6 rounded-xl border border-[#131313]/15">
        <div className="bg-[#131313]/5 p-13 rounded-xl">
          <img className="h-[172px] rounded-xl" src={image} alt={bookName} />
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">{bookName}</h2>
          <p className="font-semibold text-[16px] text-[#131313]/80 mb-4">
            By: {author}
          </p>
          <div className="flex items-center mb-4">
            <span className="mr-4">Tag:</span>
            <div className="flex items-center gap-3 ">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="badge bg-[#23BE0A]/5 text-[#23BE0A] font-semibold rounded-full px-4 py-2"
                >
                  #{tag}
                </div>
              ))}
            </div>
            <div className="flex items-center ml-4">
              <GrLocation />{" "}
              <span className="ml-2 text-[#131313]/80">
                Year of Publishing:{" "}
              </span>{" "}
              <span className="ml-1 text-[#131313]/80">
                {" "}
                {yearOfPublishing}
              </span>
            </div>
          </div>

          <div className="flex gap-4 pb-4 border-b border-[#131313]/15 w-full">
            <div className="flex items-center gap-2 text-[#131313]/60">
              <LiaUserFriendsSolid /> <span>Publisher : {publisher}</span>
            </div>
            <div className="flex items-center">
              <img className="h-6 w-6 mr-4" src={frameImg} alt="" />{" "}
              <span className="text-[#131313]/60">Page: {totalPages}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-[#328EFF]/15 text-[#328EFF] px-5 py-3 rounded-full font-semibold">
              Category: {category}
            </button>
            <button className="bg-[#FFAC33]/15 text-[#FFAC33] px-5 py-3 rounded-full font-semibold">
              Rating: {rating}
            </button>
            <Link
              className="bg-[#23BE0A] text-[#ffffff] px-5 py-3 rounded-full font-semibold"
              to={`/bookDetail/${bookId}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
}

export default ListedBookCard;
