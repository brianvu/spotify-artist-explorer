import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSidePanel = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  width: 20vw;
`

const SidePanel = ({ children }) => (
  <StyledSidePanel>{children}</StyledSidePanel>
)

export default SidePanel

SidePanel.propTypes = {
  children: PropTypes.any,
}
