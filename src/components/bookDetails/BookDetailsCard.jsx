import { ArrowBigLeft } from "lucide-react";
import React from "react";
import { useContext } from "react";
import { use } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { BookContext } from "../../context/BookContext";

const BookDetailsCard = ({ booksPromise }) => {
  const booksData = use(booksPromise);
  const books = booksData.data;
  const { id } = useParams();
  const selectedBook = books.find((book) => book.bookId == id);
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = selectedBook;

  const navigate = useNavigate();

  const { handleMarkedAsRead, handleWishList } = useContext(BookContext);

  return (
    <section className="my-10 mx-auto">
      <div className="lg:grid lg:grid-cols-2 gap-6 items-center lg:max-h-dvh">
        <div className=" p-20 bg-base-200 hidden lg:flex justify-center items-center">
          <img
            src={image}
            alt="Book Cover"
            className="max-h-[60vh] w-auto object-contain"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold">{bookName}</h1>
          <p className="text-lg">By: {author}</p>
          <hr className="text-black/20" />
          <p className="text-xl">{category}</p>
          <hr className="text-black/20" />
          <p className="text-black/80 text-base">
            <span className="font-bold text-black">Review:</span> {review}
          </p>
          <div className="flex gap-4 items-center">
            <p className="text-lg font-semibold">Tag</p>
            {tags.map((tag, index) => (
              <p
                key={index}
                className="w-fit px-2 py-1 bg-indigo-400/40 border rounded-xl border-indigo-600 text-indigo-800 text-lg"
              >
                #{tag}
              </p>
            ))}
          </div>
          <hr className="text-black/20" />
          <table className="table">
            <tr>
              <td className="text-black/80 text-base">Number of Pages:</td>{" "}
              <td className="text-black text-base font-semibold">
                {totalPages}
              </td>
            </tr>
            <tr>
              <td className="text-black/80 text-base">Publisher:</td>{" "}
              <td className="text-black text-base font-semibold">
                {publisher}
              </td>
            </tr>
            <tr>
              <td className="text-black/80 text-base">Year of Publishing:</td>{" "}
              <td className="text-black text-base font-semibold">
                {yearOfPublishing}
              </td>
            </tr>
            <tr>
              <td className="text-black/80 text-base">Rating:</td>{" "}
              <td className="text-black text-base font-semibold">{rating}/5</td>
            </tr>
          </table>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate(-1)}
              className="btn bgs rounded-lg transition hover:scale-110"
            >
              <ArrowBigLeft /> Back
            </button>
            <button
              onClick={() => handleMarkedAsRead(selectedBook)}
              className="btn bgp rounded-lg transition hover:scale-110"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishList(selectedBook)}
              className="btn bgs rounded-lg transition hover:scale-110"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsCard;
