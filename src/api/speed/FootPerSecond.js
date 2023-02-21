const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "FootPerSecond",
	category: "speed",
	utilisation: `
	{
		requestedSpeed: 100
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedSpeed) return res.json({ error: noJsonProvided })
		if(isNaN(req.body.requestedSpeed)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInFootPerSecond = parseFloat(req.body.requestedSpeed)
		let numberInMilePerHour = numberInFootPerSecond / 5280 * 60 * 60
		let numberInMeterPerSecond = numberInFootPerSecond / 3.281
		let numberInKilometerPerHour = numberInFootPerSecond * 1.097
		let numberInKnot = numberInFootPerSecond / 1.688
		return res.json({
			requested: numberInFootPerSecond,
			MilePerHour: numberInMilePerHour,
			MeterPerSecond: numberInMeterPerSecond,
			KilometerPerHour: numberInKilometerPerHour,
			Knot: numberInKnot
		})
	}
}
