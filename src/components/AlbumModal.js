import React from 'react';

const AlbumModal = ({ album, onClose, onPrev, onNext, isFirst, isLast }) => {
  if (!album) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-black text-white rounded-lg shadow-lg max-w-lg w-full p-4">
        <button className="absolute top-2 right-2 text-white hover:text-gray-800" onClick={onClose}>
          &times;
        </button>
        {!isFirst && (
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white" onClick={onPrev}>
            &lt; Prev
          </button>
        )}
        {!isLast && (
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" onClick={onNext}>
            Next &gt;
          </button>
        )}
        <img src={album.image} alt={album.name} className="w-full h-auto mb-4" />
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
