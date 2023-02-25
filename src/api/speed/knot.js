const { noNumberProvided, invalidRequest} = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "knot",
	category: "speed",
	utilisation:`
	{
		requestedSpeed: 100
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedSpeed) return res.json({ error: invalidRequest })
		if(isNaN(req.body.requestedSpeed)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInKnot = parseFloat(req.body.requestedSpeed)
		let numberInMilePerHour = numberInKnot * 1.15078
		let numberInFootPerSecond = numberInKnot * 1.68781
		let numberInMeterPerSecond = numberInKnot / 1.9438461717893492
		let numberInKilometerPerHour = number * 1.852
		return res.json({
			requested: numberInKnot,
			MilePerHour: numberInMilePerHour,
			FootPerSecond: numberInFootPerSecond,
			KilometerPerHour: numberInKilometerPerHour,
			MeterPerSecond: numberInMeterPerSecond
		})
	}
}
