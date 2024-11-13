const axios = require('axios')

const namerickmortyController = async (req, res) => {

    const query = req.query
    const name = query.name || ""
    const status = query.status || ""
    const species = query.species || ""
    const type = query.type || ""
    const gender = query.gender || ""

    console.log(query)
    const url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`

    try {
        const response = await axios.get(url)
        res.json(response.data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al obtener datos de Rick y Morty API' })
    }
}

module.exports = { namerickmortyController }