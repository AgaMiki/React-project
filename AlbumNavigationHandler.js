import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; 

const AlbumNavigationHandler = ({ selectedAlbumIndex, setSelectedAlbumIndex, albums }) => {
  const handleNavigation = (direction) => {
    const newIndex = direction === 'prev' ? selectedAlbumIndex - 1 : selectedAlbumIndex + 1;
    setSelectedAlbumIndex(newIndex);
  };

  const isFirstAlbum = selectedAlbumIndex === 0;
  const isLastAlbum = selectedAlbumIndex === albums.length - 1;

  return (
    <div className="absolute bottom-2 w-full flex justify-between px-4">
      <div>
        {!isFirstAlbum && (
          <button onClick={() => handleNavigation('prev')} className="text-white relative transform hover:scale-110 transition-transform">
            <FiChevronLeft size={24} className="icon" /> {/* Ustawienie rozmiaru ikony na 24 */}
          </button>
        )}
      </div>
      <div>
        {!isLastAlbum && (
          <button onClick={() => handleNavigation('next')} className="text-white relative transform hover:scale-110 transition-transform">
            <FiChevronRight size={24} className="icon" /> {/* Ustawienie rozmiaru ikony na 24 */}
          </button>
        )}
      </div>
    </div>
  );
};

export default AlbumNavigationHandler;
