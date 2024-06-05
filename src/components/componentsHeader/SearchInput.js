// SearchInput.js
import React from 'react';

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
          className="ml-2 text-white"
          onClick={handleClearSearch}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchInput;
