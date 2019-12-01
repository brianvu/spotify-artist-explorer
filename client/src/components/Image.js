import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImage = styled.div`
  background: url(${props => props.src}) center center;
  background-size: cover;
`
const Image = props => {
  const { className, src } = props
  return <StyledImage className={className} src={src} />
}

export default Image

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
}
