// helpers
import { sortDescending } from '../utilities'

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID

const redirectUri = `${window.location.origin}/callback`

export const Endpoints = {
  Spotify: {
    ImplicitGrant: 'https://accounts.spotify.com/authorize',
  },
}

export const searchArtists = async (spotify, searchArtist) => {
  const response = await spotify.searchArtists(searchArtist)
  const parsed = response.artists.items.map(x => parseArtist(x))
  const filtered = parsed.filter(a => a.image)
  const sorted = filtered.sort((a, b) =>
    sortDescending(a.followers, b.followers)
  )
  return sorted
}

export const getArtist = async (spotify, artistId) => {
  const response = spotify.getArtist(artistId)
  const parsed = parseArtist(response)
  return parsed
}

export const getArtistTopTracks = async (spotify, artistId, countryId) => {
  const response = await spotify.getArtistTopTracks(artistId, countryId)
  const parsed = response.tracks.map(x => parseTrack(x))
  return parsed
}

export const getRedirectUrl = () => {
  return `${Endpoints.Spotify.ImplicitGrant}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`
}

// parsers
const parseArtist = resp => ({
  id: resp.id,
  name: resp.name,
  popularity: resp.popularity,
  link: resp.external_urls.spotify,
  followers: resp.followers.total,
  genres: resp.genres,
  image: resp.images[0],
  uri: resp.uri,
})

const parseTrack = resp => ({
  id: resp.id,
  name: resp.name,
  popularity: resp.popularity,
  duration: resp.duration_ms,
  previewUrl: resp.preview_url,
  link: resp.external_urls.spotify,
  isPlayable: resp.is_playable,
  artists: resp.artists,
  album: {
    id: resp.album.id,
    name: resp.album.name,
    releaseDate: resp.album.release_date,
    image: resp.album.images[0],
    link: resp.album.external_urls.spotify,
  },
})
