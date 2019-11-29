import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 3em;
  display: flex;
  width: auto;
`

const Button = ({ children }) => <StyledButton>{children}</StyledButton>

export default Button
