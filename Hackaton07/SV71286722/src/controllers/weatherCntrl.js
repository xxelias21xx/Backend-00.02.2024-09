const axios = require('axios')

const weatherController = async (req, res) => {
  const city = req.params.city
  const API_key = process.env.API_WEATHER_API_KEY
  const API_host = process.env.API_WEATHER_HOST
  const url = `https://${API_host}/city/${city}/ES`

  const options = {
    method: 'GET',
    url: url,
    headers: {
      'x-rapidapi-key': API_key,
      'x-rapidapi-host': API_host
    }
  }

  try {
    const response = await axios.request(options)
    res.json(response.data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error al obtener datos de RapidApi' })
  }
}

module.exports = { weatherController }