import React, { useEffect, useState } from 'react';
import AlbumList from './components/AlbumList';
import './App.css';

function App() {

  const [albums, setAlbums] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .then(response => response.json())
      .then(data => setAlbums(data.feed.entry))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  const filteredAlbums = albums.filter(album => {
    const title = album['im:name'].label.toLowerCase();
    const artist = album['im:artist'].label.toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || artist.includes(query);
  });


  return (
    <div className="App">
      {}
      <AlbumList albums={filteredAlbums} setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default App;