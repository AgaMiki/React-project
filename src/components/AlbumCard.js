import React, { useState } from 'react';
function AlbumCard({ album, onClick }) {
    return (
      <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-105 group w-40 h-40" onClick={() => onClick(album)}>
        <div className="relative w-full h-full">
          <img src={album['im:image'][2].label} alt={album['im:name'].label} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-purple-500 bg-opacity-50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 border-4 border-transparent group-hover:border-purple-500"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-white bg-opacity-50 text-black p-2 transition-all duration-300 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <h3 className="text-sm font-semibold">{album['im:name'].label}</h3>
          <p className="text-xs">{album['im:artist'].label}</p>
        </div>
      </div>
    );
  }
  
  export default AlbumCard;