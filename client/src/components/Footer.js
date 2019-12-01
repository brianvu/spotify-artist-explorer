import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledFooter = styled.footer`
  bottom: 0;
`

const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>
}

export default Footer

Footer.propTypes = {
  children: PropTypes.any,
}
