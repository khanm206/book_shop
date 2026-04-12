import React from "react";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Link, NavLink } from "react-router";

const BooksPage = () => {
  const { readBookList, wishBookList } = useContext(BookContext);
  return (
    <section>
      <div className="flex gap-4">
        <NavLink className="btn bgp rounded-lg transition hover:scale-110">
          Read Books ({readBookList.length})
        </NavLink>
        <NavLink className="btn bgp rounded-lg transition hover:scale-110">
          Wishlist Books ({wishBookList.length})
        </NavLink>
      </div>
      <div className="bgs">BooksPage {readBookList.length}</div>
    </section>
  );
};

export default BooksPage;
