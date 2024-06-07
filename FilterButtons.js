// FilterButtons.js
import React from 'react';
import { FaFilter } from 'react-icons/fa'; 

const FilterButtons = ({ handleClearFilters }) => {
  return (
    <div className="relative flex items-center mb-4 md:mb-0">
      <button
        className="flex items-center text-white bg-gray-700 hover:bg-gray-800 p-2 rounded-md"
        onClick={handleClearFilters}
      >
        <FaFilter className="mr-2" /> {/* Dodanie ikony przed tekstem */}
        Clear 
      </button>
    </div>
  );
};

export default FilterButtons;

