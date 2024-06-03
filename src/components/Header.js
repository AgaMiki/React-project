import React, { useState, useEffect } from 'react';

const Header = ({ searchQuery, setSearchQuery, selectedCategories, setSelectedCategories, albums }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(albums.map(album => album.category))];
    setCategories(uniqueCategories);
  }, [albums]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleFilterChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter(cat => cat !== category)
        : [...prevCategories, category]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <header className="bg-black shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-xl font-bold text-white mb-4 md:mb-0">Top 100 Albums</h1>
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
      <div className="relative flex items-center mb-4 md:mb-0">
        <button className="text-white" onClick={handleClearFilters}>
          Clear Filters
        </button>
      </div>
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <label key={category} className="mr-4">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleFilterChange(category)}
            />
            <span className="ml-2 text-white">{category}</span>
          </label>
        ))}
      </div>
    </header>
  );
};

export default Header;


