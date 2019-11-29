import React from 'react'

const ArtistDetailDisplay = props => {
  const { artist } = props
  return <div>{JSON.stringify(artist)}</div>
}

export default ArtistDetailDisplay
