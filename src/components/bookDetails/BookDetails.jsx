import axios from "axios";
import React from "react";
import { Suspense } from "react";
import BookDetailsCard from "./BookDetailsCard";
import { PulseLoader } from "react-spinners";

const BookDetails = () => {
  const booksPromise = axios.get("/booksData.json");
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-dvh w-dvw">
          <PulseLoader color={"#1f2a44"} size={25}></PulseLoader>
        </div>
      }
    >
      <BookDetailsCard booksPromise={booksPromise} />
    </Suspense>
  );
};

export default BookDetails;
