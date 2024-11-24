import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-4 font-bold text-lg text-gray-900">{book.title}</h3>
      <p className="text-gray-600">Author: {book.author_name?.join(", ")}</p>
      <p className="text-gray-500 text-sm">
        Published: {book.first_publish_year || "Unknown"}
      </p>
    </div>
  );
};

export default BookCard;
