import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard';
import AlbumModal from './AlbumModal';
import Header from './Header';

const AlbumList = ({ albums }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {

    const uniqueCategories = [...new Set(albums.map(album => album.category.attributes.label))];
    setCategories(uniqueCategories);
  }, [albums]);

  const handleAlbumClick = (album, index) => {
    setSelectedAlbum(album);
    setSelectedAlbumIndex(index);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
    setSelectedAlbumIndex(null);
  };

  const handlePrev = () => {
    setSelectedAlbumIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex >= 0) {
        setSelectedAlbum(filteredAlbums[newIndex]);
        return newIndex;
      }
      return prevIndex;
    });
  };
  
  const handleNext = () => {
    setSelectedAlbumIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex < filteredAlbums.length) {
        setSelectedAlbum(filteredAlbums[newIndex]);
        return newIndex;
      }
      return prevIndex;
    });
  };
  

  const filteredAlbums = albums.filter(album => {
    const title = album['im:name'].label.toLowerCase();
    const artist = album['im:artist'].label.toLowerCase();
    const query = searchQuery.toLowerCase();
    const category = album.category.attributes.label;

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category);

    return (title.includes(query) || artist.includes(query)) && matchesCategory;
  });

  return (
    <div>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
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
