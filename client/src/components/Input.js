import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  height: 2em;
  margin-bottom: 2em;
  display: flex;
`

const Input = React.forwardRef((props, ref) => {
  return (
    <StyledInput
      name={props.name}
      defaultValue={props.defaultValue}
      ref={ref}
    />
  )
})

export default Input
