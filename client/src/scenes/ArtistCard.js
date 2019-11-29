import React from 'react'

// components
import Card from '../components/Card'

export const ArtistCard = ({ artist, handleArtistSelected }) => {
  return <Card data={artist} handleArtistSelected={handleArtistSelected} />
}

export default ArtistCard
