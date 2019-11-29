import SpotifyWebApi from 'spotify-web-api-js'

// helpers
import { sortDescending } from '../utilities'

const accessToken =
  'BQCmwHFib7mp9YPeCTRoC3DEOyX7fQ8_yeCOmtyssLAGxkUByLvhP8DcfZopMxY796Gba6LDkXtuXbfphcu8aiURTweea4PDV9BM1N523gFCF6-5QIs0BPJR4G8X8srkRwHqQOc83-T9_k_pRbBlRnohTflXwBWzwuZE_QhoKBuY4Q_Wb8sCNoT_UmwCq73CFRJ2hEXzejywxrAYNlCg5jD7aiGlLg4' ||
  process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN

export const searchArtists = async data => {
  const { artist } = data
  const spotify = new SpotifyWebApi()
  spotify.setAccessToken(accessToken)

  const results = await spotify.searchArtists(artist)
  const parsed = results.artists.items.map(x => parseArtist(x))
  const filtered = parsed.filter(a => a.image)
  const sorted = filtered.sort((a, b) =>
    sortDescending(a.followers, b.followers)
  )
  return sorted
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
