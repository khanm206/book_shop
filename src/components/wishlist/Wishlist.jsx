import React from "react";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import BookCard from "../bookCard/BookCard";

const Wishlist = () => {
  const { wishBookList } = useContext(BookContext);

  if (wishBookList.length === 0) {
    return (
      <div className="bg-base-200 h-[50vh] flex justify-center items-center rounded-2xl mb-10">
        <h1 className="text-2xl font-semibold">No Book Added Yet</h1>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {wishBookList.map((book, index) => (
        <BookCard key={index} book={book}></BookCard>
      ))}
    </div>
  );
};

export default Wishlist;
