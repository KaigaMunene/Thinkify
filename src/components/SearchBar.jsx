import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="relative w-full max-w-lg rounded-full bg-white shadow-lg p-2">
        <input
          type="text"
          className="w-full px-6 py-4 text-sm text-gray-500 bg-white border-none rounded-full focus:outline-none"
          placeholder="Search Categories, Products and Brands"
          value={query}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 text-white bg-dark_green rounded-full hover:bg-teal-600 focus:outline-none shadow-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
