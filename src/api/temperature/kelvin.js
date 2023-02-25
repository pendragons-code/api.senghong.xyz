const { noNumberProvided, invalidRequest } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "kelvin",
	category: "temperature",
	utilisation: `
	{
		requestedTemperature: 5
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedTemperature) return res.json({ error: invalidRequest})
		if(isNaN(req.body.requestedTemperature)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInKelvin = parseFloat(req.body.requestedTemperature)
		let numberInCelsius = numberInKelvin - 273.15
		let numberInFahrenheit = (numberInKelvin - 273.15) * 9/5 + 32
		return res.json({
			requested: numberInKelvin,
			fahrenheit: numberInFahrenheit,
			celsius: numberInCelsius
		})
	}
}
