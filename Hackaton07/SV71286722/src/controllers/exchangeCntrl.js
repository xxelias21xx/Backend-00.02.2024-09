const axios = require('axios')

const exchangeController = async (req, res) => {

    const amount = req.params.amount
    const API_KEY = process.env.API_EXCHANGE_API_KEY
    const API_URL = process.env.API_WEATHER_URL
    const url = `${API_URL}/${API_KEY}/pair/USD/PEN/${amount}`

    try {
        const response = await axios.get(url)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos de Exchange API' })
    }
}

module.exports = { exchangeController }