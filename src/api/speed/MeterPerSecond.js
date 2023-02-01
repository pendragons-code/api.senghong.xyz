const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "MeterPerSecond",
	category: "speed",
	utilisation: `
	{
		requestedSpeed: 100
	}
	`,
	async execute(req, res) {
		if(req.body.requestedSpeed) return res.json({ error: "You need to provide a number to parse!" })
		if(isNaN(req.body.requestedSpeed)) return res.json({ error: "You need to provide a number for me to parse!" })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInMeterPerSecond = parseFloat(req.body.requestedSpeed)
		let numberInFootPerSecond = numberInMeterPerSecond * 3.28084
		let numberInMilePerHour = numberInMeterPerSecond * 2.237
		let numberInKilometerPerHour = numberInMeterPerSecond * 3.6
		let numberInKnot = numberInMeterPerSecond * 1.94384
		return res.json({
			requested: numberInMeterPerSecond,
			FootPerSecond: numberInFootPerSecond,
			MilePerHour: numberInMilePerHour,
			KilometerPerHour: numberInKilometerPerHour,
			Knot: numberInKnot
		})
	}
}