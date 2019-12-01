import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledMainPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
`

const MainPanel = ({ children }) => {
  return <StyledMainPanel>{children}</StyledMainPanel>
}

export default MainPanel

MainPanel.propTypes = {
  children: PropTypes.any,
}
