const axios = require('axios')

const rickmortyController = async (req, res) => {
  const url = `https://rickandmortyapi.com/api/character/1,2,3,4,5`

  try {
    const response = await axios.get(url)
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de Rick y Morty API' })
  }
}

module.exports = { rickmortyController }