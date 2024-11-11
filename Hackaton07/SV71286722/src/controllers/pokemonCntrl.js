const axios = require('axios')

const pokemonController = async (req, res) => {

    const size = req.params.size
    const url = `${process.env.API_POKEMON_URL}${size}`

    try {
        const response = await axios.get(url)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos de PokeAPI' })
    }
}

module.exports = { pokemonController }