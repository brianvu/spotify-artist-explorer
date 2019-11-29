import React from 'react'
import styled from 'styled-components'

const StyledSidePanel = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
`

const SidePanel = ({ children }) => (
  <StyledSidePanel>{children}</StyledSidePanel>
)

export default SidePanel
