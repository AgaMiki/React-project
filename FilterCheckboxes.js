// FilterCheckboxes.js
import React, { useState } from 'react';

const FilterCheckboxes = ({ categories, selectedCategories, handleFilterChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (!categories || categories.length === 0) {
    return null;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={toggleDropdown}
        className="bg-black text-white px-4 py-2 rounded-md"
      >
        {isDropdownOpen || isHovered ? 'Hide Filters' : 'Show Filters'}
      </button>
      {(isDropdownOpen || isHovered) && (
        <div className="absolute bg-gray-800 p-4 mt-2 rounded-md shadow-lg z-10">
          {categories.map((category) => (
            <label key={category} className="block text-white">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleFilterChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterCheckboxes;

