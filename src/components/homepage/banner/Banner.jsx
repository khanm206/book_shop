import React from "react";
import banner from "../../../assets/hero_img.jpg";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-10 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className=" rounded-lg shadow-2xl md:w-full" />
        <div>
          <h1 className="text-5xl font-bold">
            Discover Your Next Favorite Book
          </h1>
          <p className="py-6">
            Browse thousands of titles across fiction, non-fiction,
            self-development, and more. Whether you’re chasing knowledge or
            escaping into stories — we’ve got something for you.
          </p>
          <Link to={"/listed_books"} className="btn btn-ghost bgp">
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
