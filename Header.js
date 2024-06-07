import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import FilterButtons from './FilterButtons';
import FilterCheckboxes from './FilterCheckboxes';

const Header = ({ searchQuery, setSearchQuery, selectedCategories, setSelectedCategories, albums }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(albums.map(album => album.category))];
    setCategories(uniqueCategories);
  }, [albums]);

  return (
    <header className="bg-black shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-xl font-bold text-white mb-4 md:mb-0">Top 100 Albums</h1>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleClearSearch={() => setSearchQuery('')} />
      <FilterCheckboxes
        categories={categories}
        selectedCategories={selectedCategories}
        handleFilterChange={(category) => setSelectedCategories((prevCategories) =>
          prevCategories.includes(category)
            ? prevCategories.filter(cat => cat !== category)
            : [...prevCategories, category]
        )}
      />
      <FilterButtons handleClearFilters={() => setSelectedCategories([])} />
    </header>
  );
};

export default Header;
