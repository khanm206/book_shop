import React from "react";
import PageChart from "./PageChart";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const PageToRead = () => {
  const { wishBookList } = useContext(BookContext);
  return (
    <section className="my-10 mx-auto">
      <PageChart wishBookList={wishBookList} />
    </section>
  );
};

export default PageToRead;
