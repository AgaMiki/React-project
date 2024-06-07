// SearchInput.js
import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Import ikony FaTimes z React Icons

const SearchInput = ({ searchQuery, setSearchQuery, handleClearSearch }) => {
  return (
    <div className="relative flex items-center mb-4 md:mb-0">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border text-black rounded-md px-2 py-1"
      />
      {searchQuery && (
        <button
          className="ml-2 text-gray-700 hover:text-gray-900"
          onClick={handleClearSearch}
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default SearchInput;


