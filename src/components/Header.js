import React, { useState } from 'react';

const Header = ({ searchQuery, setSearchQuery, categories, selectedCategories, setSelectedCategories }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
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
        <button
          className="ml-4 text-white"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filtruj
        </button>
        {showFilters && (
          <div className="absolute top-12 right-0 bg-white text-black shadow-md rounded-md p-4 z-10">
            {categories.map(category => (
              <div key={category} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                <label>{category}</label>
              </div>
            ))}
            <button
              className="mt-2 text-black bg-gray-200 rounded-md px-2 py-1"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

