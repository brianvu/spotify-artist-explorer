import React from 'react'
import PropTypes from 'prop-types'

// components
import Card from '../../components/Card'

export const ArtistCard = props => {
  const { artist, handleArtistSelected } = props
  return <Card data={artist} handleArtistSelected={handleArtistSelected} />
}

export default ArtistCard

ArtistCard.propTypes = {
  artist: PropTypes.object,
  handleArtistSelected: PropTypes.func,
}
