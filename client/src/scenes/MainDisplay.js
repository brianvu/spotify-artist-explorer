import React, { useState } from 'react'

// components
import ArtistDetailDisplay from './ArtistDetailDisplay'
import ArtistGrid from './ArtistGrid'

const MainDisplay = props => {
  const { artists } = props
  const [selectedArtist, setselectedArtist] = useState()

  const handleArtistSelected = target => {
    setselectedArtist(target)
  }

  return selectedArtist ? (
    <ArtistDetailDisplay artist={selectedArtist} />
  ) : (
    <ArtistGrid artists={artists} handleArtistSelected={handleArtistSelected} />
  )
}

export default MainDisplay
