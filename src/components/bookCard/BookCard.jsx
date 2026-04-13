import { BookOpenCheck } from "lucide-react";
import { NotebookText } from "lucide-react";
import { CalendarDays } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className=" flex gap-4 shadow-sm items-stretch rounded-xl">
      <div className="p-6 bg-base-200 hidden md:flex items-stretch rounded-xl">
        <img className="w-38" src={image} />
      </div>
      <div className="space-y-3 w-full px-4 md:px-0 pr-4 py-4">
        <h2 className="text-2xl font-semibold">{bookName}</h2>
        <p className="text-lg">By: {author}</p>
        <div className="md:flex items-center gap-12 space-y-4 md:space-y-0">
          <div className="flex gap-4 items-center">
            <p className="text-xl font-semibold">Tag</p>
            {tags.map((tag, index) => (
              <p
                key={index}
                className="w-fit px-2 py-1 bg-indigo-400/40 border rounded-xl border-indigo-600 text-indigo-800 md:text-lg"
              >
                #{tag}
              </p>
            ))}
          </div>
          <p className="flex gap-2 text-lg items-center">
            {" "}
            <CalendarDays /> Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="md:flex gap-8 space-y-4 md:space-y-0">
          <p className="flex items-center gap-2">
            <BookOpenCheck /> Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <NotebookText /> Page: {totalPages}
          </p>
        </div>
        <hr className="text-black/10" />

        <div className=" flex items-center flex-wrap gap-6">
          <p className="bg-orange-400/40 py-1 px-2 rounded-lg text-orange-700">
            Category: {category}
          </p>
          <p className="bg-orange-400/40 py-1 px-2 rounded-lg text-orange-700">
            Rating: {rating}\5
          </p>

          <Link
            to={`/book_details/${bookId}`}
            className="btn bgs rounded-lg transition hover:scale-110"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
