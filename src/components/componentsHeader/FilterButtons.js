import React from 'react';

const FilterButtons = ({ handleClearFilters }) => {
  return (
    <div className="relative flex items-center mb-4 md:mb-0">
      <button className="text-white" onClick={handleClearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default FilterButtons;
