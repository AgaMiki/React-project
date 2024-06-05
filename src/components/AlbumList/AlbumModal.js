import React from 'react';
import AlbumNavigationHandler from './AlbumNavigationHandler';

const AlbumModal = ({ album, onClose, selectedAlbumIndex, setSelectedAlbumIndex, albums }) => {
  if (!album) return null;

  const isFirstAlbum = selectedAlbumIndex === 0;
  const isLastAlbum = selectedAlbumIndex === albums.length - 1;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-black text-white rounded-lg shadow-lg max-w-lg w-full p-4">
        <button className="absolute top-2 right-2 text-white hover:text-gray-800" onClick={onClose}>
          &times;
        </button>
        <AlbumNavigationHandler
          selectedAlbumIndex={selectedAlbumIndex}
          setSelectedAlbumIndex={setSelectedAlbumIndex}
          albums={albums}
        />
        <img src={album.image} alt={album.name} className=" h-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">{album.name}</h2>
        <p className="text-lg text-white mb-4">{album.artist}</p>
        <p className="text-sm text-white">Release Date: {album.releaseDate}</p>
        <p className="text-sm text-white">Category: {album.category}</p>
        <p className="text-sm text-white">Price: {album.price}</p>
      </div>
    </div>
  );
};

export default AlbumModal;

