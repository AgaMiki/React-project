import React from 'react';

const Header = ({ searchQuery, setSearchQuery }) => {
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <header className="bg-black shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">Top 100 Albums</h1>
      <div className="relative flex items-center">
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
    </header>
  );
};

export default Header;