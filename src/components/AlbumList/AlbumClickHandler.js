import React from 'react';

const AlbumClickHandler = ({ album, index, setSelectedAlbum, setSelectedAlbumIndex, children }) => {
  const handleAlbumClick = () => {
    setSelectedAlbum(album);
    setSelectedAlbumIndex(index);
  };

  return (
    <div onClick={handleAlbumClick}>
      {children}
    </div>
  );
};

export default AlbumClickHandler;
