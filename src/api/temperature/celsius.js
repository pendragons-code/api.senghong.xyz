module.exports = {
	name: "celsius",
	async execute(req, res) {
		if(!req.body) return res.json({ error: "You need to provide a json request!" })
		if(!req.body.requestedTemperature) return res.json({ error: "You need to provide a number for me to parse!" })
		if(isNaN(parseFloat(req.body.requestedTemperature))) return res.json({ error: "You need to provide a valid number!" })
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
