import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readBookList, setReadBookList] = useState([]);
  const [wishBookList, setWishBookList] = useState([]);

  const handleWishList = (currentBook) => {
    const isExistWishList = wishBookList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    const isExistReadList = readBookList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistWishList) {
      toast.error(`${currentBook.bookName} is Already Added to The Wishlist!`);
      return;
    } else if (isExistReadList) {
      toast.warning(
        `${currentBook.bookName} is Already Exist in The Reading List!`,
      );
      return;
    } else {
      setWishBookList([...wishBookList, currentBook]);
      toast.success(`${currentBook.bookName} is Added to The Wishlist!`);
    }
  };
  const handleMarkedAsRead = (currentBook) => {
    const isExist = readBookList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExist) {
      toast.error(
        `${currentBook.bookName} is Already Added to The Reading List!`,
      );
      return;
    } else {
      setReadBookList([...readBookList, currentBook]);
      toast.success(`${currentBook.bookName} is Added to The Reading List!`);
    }
  };

  const data = {
    readBookList,
    wishBookList,
    setWishBookList,
    setReadBookList,
    handleMarkedAsRead,
    handleWishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
