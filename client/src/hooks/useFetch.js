import { useEffect, useState } from 'react'

const useFetch = (url, options) => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(json)
      } catch (err) {
        setError(err)
      }
    }
    fetchData()
  }, [])

  return { response, error }
}

export default useFetch
