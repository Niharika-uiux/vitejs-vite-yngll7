import React, { useState } from "react";
import SearchBar from "../Component/SearchBar";
import BookCard from "../Component/BookCard";
import img from "../media/images/book.png";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [sortOption, setSortOption] = useState(""); // Sorting option

  const fetchBooks = async (query) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}&limit=10&offset=${startIndex}`
      );
      
      const data = await response.json();
      if (data.docs.length === 0) {
        setError("No books found. Please try another search.");
      }
      setBooks(data.docs);
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    }
    setLoading(false);
  };

  const handleSort = (option) => {
    setSortOption(option);
    const sortedBooks = [...books].sort((a, b) => {
      if (option === "year") {
        return (a.first_publish_year || 0) - (b.first_publish_year || 0);
      } else if (option === "author") {
        return (a.author_name?.[0] || "").localeCompare(b.author_name?.[0] || "");
      }
      return 0;
    });
    setBooks(sortedBooks);
  };

  return (
    <div className="container mx-auto py-10">
      <SearchBar onSearch={fetchBooks} />
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Sorting Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={() => handleSort("year")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sort by Year
        </button>
        <button
          onClick={() => handleSort("author")}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Sort by Author
        </button>
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
<div className="flex justify-center mt-10">
        <img
          src={img} // Reference the imported image
          alt="Books"
          className="rounded shadow-lg w-full max-w-md"
        />
      </div>
     
    </div>
  );
};
export default Home;