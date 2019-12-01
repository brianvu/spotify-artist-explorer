import React, { useState } from 'react'
import PropTypes from 'prop-types'

// components
import ArtistDetailDisplay from './artist/ArtistDetailDisplay'
import ArtistGrid from './artist/ArtistGrid'

const MainDisplay = props => {
  const { artists } = props
  const [selectedArtist, setSelectedArtist] = useState()

  const handleArtistSelected = selected => {
    setSelectedArtist(selected)
  }

  const handleArtistDeselected = () => {
    setSelectedArtist(null)
  }

  return selectedArtist ? (
    <ArtistDetailDisplay
      artist={selectedArtist}
      handleArtistDeselected={handleArtistDeselected}
    />
  ) : (
    <ArtistGrid artists={artists} handleArtistSelected={handleArtistSelected} />
  )
}

export default MainDisplay

MainDisplay.propTypes = {
  artists: PropTypes.array,
}
