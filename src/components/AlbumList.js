import React, { useState } from 'react';
import AlbumCard from './AlbumCard';
import AlbumModal from './AlbumModal';
import Header from './Header';

const AlbumList = ({ albums, searchQuery, setSearchQuery, selectedCategories, setSelectedCategories }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);

  const handleAlbumClick = (album, index) => {
    setSelectedAlbum(album);
    setSelectedAlbumIndex(index);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
    setSelectedAlbumIndex(null);
  };

  const handlePrev = () => {
    setSelectedAlbumIndex(prevIndex => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : 0;
    });
  };
  
  const handleNext = () => {
    setSelectedAlbumIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      return newIndex < filteredAlbums.length ? newIndex : prevIndex;
    });
  };
  
  const filteredAlbums = albums.filter(album =>
    (album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     album.artist.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategories.length === 0 || selectedCategories.includes(album.category))
  );

  return (
    <div>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        albums={albums}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {filteredAlbums.map((album, index) => (
          <AlbumCard
            key={album.id}
            album={album}
            onClick={() => handleAlbumClick(album, index)}
          />
        ))}
      </div>
      {selectedAlbum && (
        <AlbumModal
          album={selectedAlbum}
          onClose={closeModal}
          onPrev={handlePrev}
          onNext={handleNext}
          isFirst={selectedAlbumIndex === 0}
          isLast={selectedAlbumIndex === filteredAlbums.length - 1}
        />
      )}
    </div>
  );
};

export default AlbumList;
