import React from 'react';

const AlbumNavigationHandler = ({ selectedAlbumIndex, setSelectedAlbumIndex, albums }) => {
  const handleNavigation = (direction) => {
    const newIndex = direction === 'prev' ? selectedAlbumIndex - 1 : selectedAlbumIndex + 1;
    setSelectedAlbumIndex(newIndex);
  };

  const isFirstAlbum = selectedAlbumIndex === 0;
  const isLastAlbum = selectedAlbumIndex === albums.length - 1;

  return (
    <div>
      {!isFirstAlbum && (
        <button onClick={() => handleNavigation('prev')}>Previous</button>
      )}
      {!isLastAlbum && (
        <button onClick={() => handleNavigation('next')}>Next</button>
      )}
    </div>
  );
};

export default AlbumNavigationHandler;
