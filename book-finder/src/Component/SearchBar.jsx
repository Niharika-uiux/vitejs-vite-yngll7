import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
    window.location.reload()
  };

  return (

    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "0.5rem", // Optional gap between items
      marginTop: "5rem", // 32px margin at the top
      paddingTop: "1rem", // 16px padding at the top
    }} >
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
      <button
        onClick={handleClear}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200 "
      >
        Clear
       </button>
    </div>
  );
};
export default SearchBar;