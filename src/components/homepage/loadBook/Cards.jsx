import React from "react";
import Card from "./Card";
import { use } from "react";

const Cards = ({ booksPromise }) => {
  const books = use(booksPromise);
  const booksData = books.data;
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {booksData?.map((book) => (
        <Card key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default Cards;
