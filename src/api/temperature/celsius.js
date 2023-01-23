const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "celsius",
	async execute(req, res) {
		if(!req.body.requestedTemperature) return res.json({ error: "You need to provide a number for me to parse!" })
		if(isNaN(req.body.requestedTemperature)) return res.json({ error: "You need to provide a valid number!" })
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
