import axios from "axios";
import React from "react";
import Cards from "./Cards";
import { Suspense } from "react";
import { PulseLoader } from "react-spinners";

const booksPromise = axios.get("/booksData.json");

const AllBooks = () => {
  return (
    <div className="md:mt-20 mt-10 space-y-8">
      <h1 className="text-center text-5xl font-bold">Books</h1>
      <Suspense
        fallback={
          <div className="flex justify-center my-20">
            <PulseLoader color={"#1f2a44"} size={25}></PulseLoader>
          </div>
        }
      >
        <Cards booksPromise={booksPromise} />
      </Suspense>
    </div>
  );
};

export default AllBooks;
