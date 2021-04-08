import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

// helpers
import {
  parseHashFromWindow,
  validateToken,
  parseToken,
} from '../helpers/utilities'

const SpotifyContext = React.createContext()

const SpotifyProvider = ({ children }) => {
  const [spotify, setSpotify] = useState()
  const [tokenInfo, setTokenInfo] = useState()

  useEffect(() => {
    const initialize = () => {
      let token
      if (tokenInfo) token = tokenInfo
      else {
        const hash = parseHashFromWindow()
        token = parseToken(hash)
        if (token) setTokenInfo(token)
        //window.history.replaceState(null, null, window.location.origin)
      }

      const spotifyWebApi = new SpotifyWebApi()
      spotifyWebApi.setAccessToken(token.token)
      setSpotify(spotifyWebApi)
    }
    initialize()
  }, [tokenInfo])

  const isTokenValid = () => {
    return validateToken(tokenInfo)
  }

  const context = {
    spotify,
    isTokenValid,
  }
  return (
    <SpotifyContext.Provider value={context}>
      {children}
    </SpotifyContext.Provider>
  )
}

export { SpotifyContext, SpotifyProvider }
