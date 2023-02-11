const { noNumberProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "celsius",
	category: "temperature",
	utilisation: `
	{
		requestedTemperature: 5
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedTemperature) return res.json({ error: noNumberProvided })
		if(isNaN(req.body.requestedTemperature)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInCelsius = parseFloat(req.body.requestedTemperature)
		let numberInKelvin = numberInCelsius + 273.15
		let numberInFahrenheit = (numberInCelsius * 9/5) + 32
		return res.json({
			requested: numberInCelsius,
			kelvin: numberInKelvin,
			fahrenheit: numberInFahrenheit
		})
	}
}
