import React from 'react'
import PropTypes from 'prop-types'

// components
import ArtistCard from './ArtistCard'

const ArtistGrid = props => {
  const { artists, handleArtistSelected } = props
  return artists.map(artist => (
    <ArtistCard
      artist={artist}
      key={artist.id}
      handleArtistSelected={handleArtistSelected}
    />
  ))
}

export default ArtistGrid

ArtistGrid.propTypes = {
  artists: PropTypes.array,
  handleArtistSelected: PropTypes.func,
}
