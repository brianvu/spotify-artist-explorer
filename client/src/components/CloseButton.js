import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCloseButton = styled.div`
  width: 10px;
  height: 10px;
  &:hover {
    cursor: pointer;
  }
`

const CloseButton = props => {
  const { onClose } = props
  return <StyledCloseButton onClick={() => onClose()}>X</StyledCloseButton>
}

export default CloseButton

CloseButton.propTypes = {
  onClose: PropTypes.func,
}
