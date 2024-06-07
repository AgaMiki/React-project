import React from 'react';
import AlbumNavigationHandler from './AlbumNavigationHandler';

const AlbumModal = ({ album, onClose, selectedAlbumIndex, setSelectedAlbumIndex, albums, isOpen }) => {
  if (!album) return null;

  const isFirstAlbum = selectedAlbumIndex === 0;
  const isLastAlbum = selectedAlbumIndex === albums.length - 1;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative bg-black text-white rounded-lg shadow-lg max-w-lg w-full p-4 transition-transform duration-500 transform scale-100">
        <button className="absolute top-2 right-2 text-white hover:text-gray-800" onClick={onClose}>
          &times;
        </button>
        <AlbumNavigationHandler
          selectedAlbumIndex={selectedAlbumIndex}
          setSelectedAlbumIndex={setSelectedAlbumIndex}
          albums={albums}
        />
        <img src={album.image} alt={album.name} className="h-auto mb-4 mx-auto" />
        <h2 className="text-2xl font-bold mb-2 text-center">{album.name}</h2>
        <p className="text-lg text-white mb-4">{album.artist}</p>
        <div className="flex justify-between text-sm text-white">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 2a1 1 0 011-1h2a1 1 0 011 1v1h3a2 2 0 012 2v13a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h3V2zm3 3V3h-2v2H8v1h4V6h1zm-6 6v7a1 1 0 001 1h10a1 1 0 001-1v-7H5zm2 2h2v3H7v-3zm4 0h2v3h-2v-3zm3 0h2v3h-2v-3zm-7 0v3H8v-3h3zm7 1v2H9v-2h10z" clipRule="evenodd" />
            </svg>
            {album.releaseDate}
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 011-1h2a1 1 0 011 1v1h2a2 2 0 012 2v13a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h3V2zm1 2H8v1h2V4zm1 5H7v1h4V9zm0 2H7v1h4v-1zm0 2H7v1h4v-1zm0 2H7v1h4v-1zm-5 1v-1h2v1H6zm11 0v-1h2v1h-2zM6 7V6h8v1H6zm11 0V6h2v1h-2zm0 2v1h2v-1h-2zm0 2v1h2v-1h-2zm0 2v1h2v-1h-2zm0 2v1h2v-1h-2zm0 2v1h2v-1h-2zm0 2v1h2v-1h-2zm0 2v1h2v-1h-2z" clipRule="evenodd" />
            </svg>
            {album.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlbumModal;
