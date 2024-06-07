// AlbumList.js
import React, { useState, useEffect } from 'react';
import AlbumCard from './AlbumCard/AlbumCard';
import AlbumModal from './AlbumModal';
import Header from '../componentsHeader/Header';
import fetchTopAlbums from '../../services/albumService';
import Footer from '../Footer'; 

const AlbumList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [albums, setAlbums] = useState([]); 
  const [originalAlbums, setOriginalAlbums] = useState([]); 
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const fetchedAlbums = await fetchTopAlbums();
      setAlbums(fetchedAlbums);
      setOriginalAlbums(fetchedAlbums);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filteredAlbums = originalAlbums.filter(album => {
      const searchLower = searchQuery.toLowerCase();
      return (
        album.name.toLowerCase().includes(searchLower) || 
        album.artist.toLowerCase().includes(searchLower)
      ) && (
        selectedCategories.length === 0 || selectedCategories.includes(album.category)
      );
    });
    setAlbums(filteredAlbums);
  }, [searchQuery, selectedCategories, originalAlbums]);

  const handleCloseModal = () => {
    setSelectedAlbumIndex(null); 
  };

  // Funkcja obsługująca kliknięcie w AlbumCard
  const handleAlbumCardClick = (index) => {
    setSelectedAlbumIndex(index); // Ustawia index wybranego albumu
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow mb-16"> 
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          albums={originalAlbums}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {albums.map((album, index) => (
            <div key={album.id}>
              <AlbumCard 
                album={album} 
                onClick={() => handleAlbumCardClick(index)} // Przekazuje funkcję obsługi kliknięcia
              />
            </div>
          ))}
        </div>
        {selectedAlbumIndex !== null && (
          <div>
            <AlbumModal
              album={albums[selectedAlbumIndex]}
              onClose={handleCloseModal}
              selectedAlbumIndex={selectedAlbumIndex}
              setSelectedAlbumIndex={setSelectedAlbumIndex}
              albums={albums}
              isOpen={true} // Ustawia AlbumModal jako otwarty
            />
          </div>
        )}
      </main>
      <Footer /> 
    </div>
  );
};

export default AlbumList;
