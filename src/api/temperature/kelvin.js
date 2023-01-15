const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "kelvin",
	async execute(req, res) {
		if(!req.body.requestedTemperature) return res.json({ error: "You need to provide a number for me to parse!" })
		if(isNaN(parseFloat(req.body.requestedTemperature))) return res.json({ error: "You need to provide a valid number!" })
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
