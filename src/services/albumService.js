const fetchTopAlbums = async () => {
    try {
      const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
      const data = await response.json();
      return data.feed.entry.map(album => ({
        id: album.id.attributes['im:id'],
        name: album['im:name'].label,
        artist: album['im:artist'].label,
        image: album['im:image'][2].label,
        category: album.category.attributes.label,
        releaseDate: album['im:releaseDate'].label,
        price: album['im:price'].label
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  export default fetchTopAlbums;
