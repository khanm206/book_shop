import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Card = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link to={`/book_details/${bookId}`} className="hover-3d">
      <div className="card bg-base-100 shadow-sm h-full">
        <figure className="p-10">
          <img
            src={image}
            alt="Book Cover"
            className="rounded-xl p-10 bg-base-200 md:w-full lg:h-140 h-100"
          />
        </figure>
        <div className="px-6 space-y-4 pb-10">
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="w-fit px-2 py-1 bg-indigo-400/40 border rounded-xl border-indigo-600 text-indigo-800 text-lg"
              >
                {tag}
              </p>
            ))}
          </div>
          <h2 className="text-3xl font-bold">{bookName}</h2>
          <p className="text-2xl">By: {author}</p>

          <div className="border-b border-black/20 border-dashed"></div>
          <div className="flex justify-between text-xl">
            <p>{category}</p>
            <p className="flex items-center gap-1">
              {rating}
              <Star size={18} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
