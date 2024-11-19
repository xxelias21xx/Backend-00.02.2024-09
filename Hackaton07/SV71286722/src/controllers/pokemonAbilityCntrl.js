const axios = require('axios')

const pokemonAbilityController = async (req, res) => {

    const pokemon = req.params.pokemon
    const url = `${process.env.API_POKEMON_URL}/${pokemon}`

    try {
        const response = await axios.get(url)
        const abilities = response.data.abilities.map(e => e.ability.name)
        res.json(abilities)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos de PokeAPI' })
    }
}

module.exports = { pokemonAbilityController }