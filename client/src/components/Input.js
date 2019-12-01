import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
  height: 2em;
  margin-bottom: 2em;
  display: flex;
`

const Input = React.forwardRef((props, ref) => {
  const { name, defaultValue } = props
  return <StyledInput name={name} defaultValue={defaultValue} ref={ref} />
})

export default Input

Input.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
}
