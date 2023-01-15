const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "fahrenheit",
	async execute(req, res) {
		if(!req.body.requestedTemperature) return res.json({ error: "You need to provide a number for me to parse!" })
		if(isNaN(parseFloat(req.body.requestedTemperature))) return res.json({ error: "You need to provide a valid number!" })
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
