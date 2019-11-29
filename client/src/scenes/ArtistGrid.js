import React from 'react'

// components
import ArtistCard from './ArtistCard'

const ArtistGrid = ({ artists, handleArtistSelected }) => {
  return artists.map(artist => (
    <ArtistCard
      artist={artist}
      key={artist.id}
      handleArtistSelected={handleArtistSelected}
    />
  ))
}

export default ArtistGrid
