import axios from "axios"
import { useEffect, useState } from "react"

/*
Here we will create a custom hook to fetch all countries data from the API
Here is the url: https://restcountries.com/v3.1/all
The hook must have to use axios to fetch the data


*/

const url = "https://restcountries.com/v3.1/all"

export const useAllCountries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCountries(
          res.data.map((country) => ({
            name: country.name.common,
            capital: country.capital,
            flag: country.flags.png,
            population: country.population,
            region: country.region,
          }))
        )
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [])

  return { countries, loading, error }
}
