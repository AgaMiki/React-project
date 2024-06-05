import React, { useEffect, useState } from 'react';
import AlbumList from './components/AlbumList';
import fetchTopAlbums  from './services/albumService';
import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const fetchedAlbums = await fetchTopAlbums();
        setAlbums(fetchedAlbums);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };//usunąć
  
    fetchAlbums();
  }, []);
  
  const filteredAlbums = albums.filter(album => {
    const title = album.name.toLowerCase();
    const artist = album.artist.toLowerCase();
    const query = searchQuery.toLowerCase();
    return (
      (title.includes(query) || artist.includes(query)) &&
      (selectedCategories.length === 0 || selectedCategories.includes(album.category))
    );
  });

  return (
    <div className="App">
      <AlbumList
        albums={filteredAlbums}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </div>
  );
}

export default App;

