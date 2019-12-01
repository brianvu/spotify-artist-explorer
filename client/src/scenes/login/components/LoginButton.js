import React from 'react'
import styled from 'styled-components'

// helpers
import { getRedirectUrl } from '../../../helpers/api/SpotifyHelper'

const StyledLoginButton = styled.button`
  margin-top: 1rem;
`

const LoginButton = props => {
  const redirect = () => {
    const redirectUrl = getRedirectUrl()
    window.location.assign(redirectUrl)
  }
  return (
    <StyledLoginButton onClick={() => redirect()}>
      Login to Spotify
    </StyledLoginButton>
  )
}

export default LoginButton
