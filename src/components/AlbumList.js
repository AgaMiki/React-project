import React, { useState } from 'react';
import AlbumCard from './AlbumCard';
import AlbumModal from './AlbumModal';
import Header from './Header';

const AlbumList = ({ albums }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
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
    const newIndex = selectedAlbumIndex - 1;
    if (newIndex >= 0) {
      setSelectedAlbum(filteredAlbums[newIndex]);
      setSelectedAlbumIndex(newIndex);
    }
  };

  const handleNext = () => {
    const newIndex = selectedAlbumIndex + 1;
    if (newIndex < filteredAlbums.length) {
      setSelectedAlbum(filteredAlbums[newIndex]);
      setSelectedAlbumIndex(newIndex);
    }
  };

  const filteredAlbums = albums.filter((album) =>
    album['im:name'].label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    album['im:artist'].label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {filteredAlbums.map((album, index) => (
          <AlbumCard key={album.id.attributes['im:id']} album={album} onClick={() => handleAlbumClick(album, index)} />
        ))}
      </div>
      {selectedAlbum && (
        <AlbumModal
          album={selectedAlbum}
          onClose={closeModal}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default AlbumList;