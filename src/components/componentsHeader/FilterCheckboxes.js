import React from 'react';

const FilterCheckboxes = ({ categories, selectedCategories, handleFilterChange }) => {
    if(!categories || categories.lenght ===0){
            return null;
        }
  return (
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
  );
};

export default FilterCheckboxes;

