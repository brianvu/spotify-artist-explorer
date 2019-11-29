import React, { useState, useEffect } from 'react'

// components
import SearchForm from './scenes/SearchForm'
import SidePanel from './components/SidePanel'
import MainPanel from './components/MainPanel'
import MainDisplay from './scenes/MainDisplay'

// styles
import { searchArtists } from './helpers/api/SpotifyHelper'

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
}

const App = () => {
  const [artistSearchResults, setArtistSearchResults] = useState([])

  useEffect(() => {
    const load = () => {
      const cached = JSON.parse(sessionStorage.getItem('artist-search'))
      if (cached) setArtistSearchResults(cached)
    }
    load()
  }, [])

  const handleSearch = async searchTerm => {
    const response = await searchArtists(searchTerm)
    setArtistSearchResults(response)
    sessionStorage.setItem('artist-search', JSON.stringify(response))
  }

  return (
    <div style={styles.app}>
      <SidePanel>
        <SearchForm handleSearch={handleSearch} />
      </SidePanel>
      <MainPanel>
        <MainDisplay artists={artistSearchResults} />
        {/* <CuteDisplay /> */}
      </MainPanel>
    </div>
  )
}

export default App
