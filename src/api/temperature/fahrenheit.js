const { noNumberProvided, invalidRequest } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "fahrenheit",
	category: "temperature",
	utilisation: `
	{
		requestedTemperature: 5
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedTemperature) return res.json({ error: invalidRequest })
		if(isNaN(req.body.requestedTemperature)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInFahrenheit = parseFloat(req.body.requestedTemperature)
		let numberInCelsius = (numberInFahrenheit - 32) * 5/9
		let numberInKelvin = numberInCelsius + 273.15
		return res.json({
			requested: numberInFahrenheit,
			kelvin: numberInKelvin,
			celsius: numberInCelsius
		})
	}
}
