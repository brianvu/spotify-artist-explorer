import SpotifyWebApi from 'spotify-web-api-js'

// helpers
import { sortDescending } from '../utilities'

const accessToken =
  'BQDWT15Q2uuhBeUwU3mbTKqM2IVGpbaD9YT6ZUc2A9SR1vmyg2aYzViKCOO9D37jNtP3PbBFoBzSxJBbc0lMY8dPxAtxt1aZhFVGcBhCpY6VNptyuRaJVW-5apcNtGVntCwHrBMm6gqdK-I27VCcAssDajk3olmtl30hJC6EQmQlCz3kEaZITY9Z-E04pw-ZZgcBPZJYJxXre51_4o_IOf4fEWceJkQ' ||
  process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN

export const searchArtists = async data => {
  const { artist } = data
  const spotify = new SpotifyWebApi()
  spotify.setAccessToken(accessToken)

  const response = await spotify.searchArtists(artist)
  const parsed = response.artists.items.map(x => parseArtist(x))
  const filtered = parsed.filter(a => a.image)
  const sorted = filtered.sort((a, b) =>
    sortDescending(a.followers, b.followers)
  )
  return sorted
}

export const getArtist = async artistId => {
  const spotify = new SpotifyWebApi()
  spotify.setAccessToken(accessToken)

  const response = await spotify.getArtist(artistId)
  const parsed = parseArtist(response)
  return parsed
}

export const getArtistTopTracks = async artistId => {
  const spotify = new SpotifyWebApi()
  spotify.setAccessToken(accessToken)

  const response = await spotify.getArtistTopTracks(artistId)
  const parsed = response.tracks.map(x => parseTrack(x))
  return parsed
}

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
