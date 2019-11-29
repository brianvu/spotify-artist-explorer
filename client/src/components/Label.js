import React from 'react'
import styled from 'styled-components'

// styles
import { fontSizes } from '../styles/styles'

const StyledLabel = styled.label`
  font-size: ${fontSizes.medium};
  margin-bottom: 0.5em;
  display: flex;
`

const Label = ({ children }) => <StyledLabel>{children}</StyledLabel>

export default Label
