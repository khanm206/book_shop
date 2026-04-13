import React from "react";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import BookCard from "../bookCard/BookCard";

const ReadList = () => {
  const { readBookList } = useContext(BookContext);

  if (readBookList.length === 0) {
    return (
      <div className="bg-base-200 h-[50vh] flex justify-center items-center rounded-2xl mb-10">
        <h1 className="text-2xl font-semibold">No Book Added Yet</h1>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {readBookList.map((book, index) => (
        <BookCard key={index} book={book} index={index}></BookCard>
      ))}
    </div>
  );
};

export default ReadList;
