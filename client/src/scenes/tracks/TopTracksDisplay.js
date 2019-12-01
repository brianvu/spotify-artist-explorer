import React from 'react'
import PropTypes from 'prop-types'

// components
import Track from '../tracks/Track'

const styles = {
  topTracks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
    flex: 1,
  },
}
const TopTracksDisplay = props => {
  const { tracks } = props

  if (!tracks) return
  return (
    <div style={styles.topTracks}>
      {tracks.map(x => (
        <Track data={x} />
      ))}
    </div>
  )
}

export default TopTracksDisplay

TopTracksDisplay.propTypes = {
  tracks: PropTypes.array,
}
