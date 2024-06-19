import React from 'react';

const AlbumNavigationHandler = ({ selectedAlbumIndex, setSelectedAlbumIndex, albums }) => {
  const handleNavigation = (direction) => {
    const newIndex = direction === 'prev' ? selectedAlbumIndex - 1 : selectedAlbumIndex + 1;
    // [!] Crashuje apkę przy próbie kliknięcia w previous/next
    // "setSelectedAlbumIndex is not a function"
    // Ten komponent nigdy nie otrzymuje 'setSelectedAlbumIndex', poszukaj w komponentach 'wyżej'
    // w którym miejscu jest problem (gdzieś nie przekazano 'setSelectedAlbumIndex' prop)
    setSelectedAlbumIndex(newIndex);
  };

  const isFirstAlbum = selectedAlbumIndex === 0;
  // [!] Crashuje apkę przy próbie otwarcia modalu
  // "Cannot read properties of undefined (reading 'length')"
  // Ten komponent nigdy nie otrzymuje 'albums', poszukaj w komponentach 'wyżej'
  // w którym miejscu jest problem (gdzieś nie przekazano 'albums' prop)
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
