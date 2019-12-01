export const sortDescending = (a, b) => {
  if (a > b) return -1
  if (b > a) return 1
  return 0
}

export const addSecondsToDate = (date, seconds) => {
  const numSeconds = parseInt(seconds)
  return new Date(date.getTime() + numSeconds * 1000)
}

export const parseHashFromWindow = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      if (item) {
        var parts = item.split('=')
        initial[parts[0]] = decodeURIComponent(parts[1])
      }
      return initial
    }, {})
}

export const parseToken = resp => ({
  token: resp.access_token,
  type: resp.token_type,
  expires: addSecondsToDate(new Date(), resp.expires_in),
  scope: resp.scope,
})

export const validateToken = token => {
  if (!token || !token.expires) return false
  const now = new Date()
  const expires = new Date(token.expires)
  return now.getTime() < expires.getTime()
}

// export const encodeFormData = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&')
// }
