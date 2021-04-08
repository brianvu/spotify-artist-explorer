import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

// components
import CloseButton from '../../components/CloseButton'
import AvatarImage from './components/AvatarImage'
import TopTracksDisplay from '../tracks/TopTracksDisplay'

// context
import { SpotifyContext } from '../../context/SpotifyContext'

// helper
import { getArtistTopTracks } from '../../helpers/api/SpotifyHelper'

const styles = {
  detailPanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1rem',
    width: '85vw',
    height: '100vh',
    flex: 1,
  },
  closeButton: { height: 10, width: 10 },
  artistInfo: {
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(0,0,0,.9)',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 1rem',
    flex: 1,
  },
}

const ArtistDetailDisplay = props => {
  const { artist, handleArtistDeselected } = props
  const { id, image, name } = artist

  const [topTracks, setTopTracks] = useState()

  const { spotify } = useContext(SpotifyContext)

  useEffect(() => {
    const getTopTracks = async () => {
      const response = await getArtistTopTracks(spotify, id, 'US')
      if (response) {
        setTopTracks(response)
      }
    }
    getTopTracks()
  }, [id, spotify])

  return (
    <div style={styles.detailPanel}>
      <CloseButton onClose={handleArtistDeselected} />
      <div style={styles.artistInfo}>
        <AvatarImage src={image.url} />
        <h1>{name}</h1>
      </div>
      <TopTracksDisplay tracks={topTracks} />
    </div>
  )
}

export default ArtistDetailDisplay

ArtistDetailDisplay.propTypes = {
  artist: PropTypes.array,
  token: PropTypes.object,
  handleArtistDeselected: PropTypes.func,
}
