import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// components
import Image from '../../../components/Image'

const StyledAvatarImage = styled(Image)`
  border: 2px solid black;
  border-radius: 100px;
  width: 320px;
  height: 320px;
`
const AvatarImage = props => {
  const { src } = props
  return <StyledAvatarImage src={src} />
}

export default AvatarImage

AvatarImage.propTypes = {
  src: PropTypes.string,
}
