import React from 'react'
import PropTypes from 'prop-types'

const Track = props => {
  const { data } = props
  return <div>{JSON.stringify(data)}</div>
}

export default Track

Track.propTypes = {
  data: PropTypes.object,
}
