import { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search query:', query);
    // Add search functionality here
  };

  return (
    <div className="flex items-center justify-center">
      <div className=" relative w-full max-w-md rounded p-2 shadow-lg shadow-black">
        <input
          type="text"
          className="w-full px-4 py-4 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search Categories, Products and Brands"
          value={query}
          onChange={handleInputChange}
        />
        <button
          type="button"
          className="absolute right-0 top-0 mt-4 mr-3 px-4 py-2 text-white bg-dark_green rounded-full hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
