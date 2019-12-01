import React, { useState, useEffect, useContext } from 'react'

// components
import SearchForm from './scenes/SearchForm'
import SidePanel from './components/SidePanel'
import MainPanel from './components/MainPanel'
import MainDisplay from './scenes/MainDisplay'
import LoginDisplay from './scenes/login/LoginDisplay'

// context
import { SpotifyContext } from './context/SpotifyContext'

// helpers
import { searchArtists } from './helpers/api/SpotifyHelper'

// styles
const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
}

const App = () => {
  const [artistSearchResults, setArtistSearchResults] = useState([])
  const { spotify, isTokenValid } = useContext(SpotifyContext)

  useEffect(() => {
    const initialize = () => {
      // get last cached results
      const cached = JSON.parse(sessionStorage.getItem('search-results'))
      if (cached) setArtistSearchResults(cached)
    }

    initialize()
  }, [])

  const handleSearch = async ({ searchArtist }) => {
    const response = await searchArtists(spotify, searchArtist)
    setArtistSearchResults(response)
    sessionStorage.setItem('search', searchArtist)
    sessionStorage.setItem('search-results', JSON.stringify(response))
  }

  return isTokenValid() ? (
    <div style={styles.app}>
      <SidePanel>
        <SearchForm handleSearch={handleSearch} />
      </SidePanel>
      <MainPanel>
        <MainDisplay artists={artistSearchResults} />
        {/* <CuteDisplay /> */}
      </MainPanel>
    </div>
  ) : (
    <LoginDisplay />
  )
}

export default App
