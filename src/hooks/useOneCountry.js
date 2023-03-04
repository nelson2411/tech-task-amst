import axios from "axios"
import { useEffect, useState } from "react"

/*
Here we will create a custom hook to fetch data for a single country from the API
Here is the url: https://restcountries.com/v3.1/name/{name}
The hook must have to use axios to fetch the data


*/

export const useOneCountry = (name) => {
  const [country, setCountry] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => {
        setCountry(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [name])

  return { country, loading, error }
}
