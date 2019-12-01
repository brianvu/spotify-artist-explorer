import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  height: 3em;
  display: flex;
  width: auto;
`

const Button = ({ children }) => <StyledButton>{children}</StyledButton>

export default Button

Button.propTypes = {
  children: PropTypes.any,
}
