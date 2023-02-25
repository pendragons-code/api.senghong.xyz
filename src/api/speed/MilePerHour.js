const { noNumberProvided, invalidRequest } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "MilePerHour",
	category: "speed",
	utilisation: `
	{
		requestedSpeed: 100
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedSpeed) return res.json({ error: invalidRequest })
		if(isNaN(req.body.requestedSpeed)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInMilePerHour = parseFloat(req.body.requestedSpeed)
		let numberInFootPerSecond = numberInMilePerHour * 1.46667
		let numberInMeterPerSecond = numberInMilePerHour / 2.237
		let numberInKilometerPerHour = numberInMilePerHour * 1.60934
		let numberInKnot = numberInMilePerHour / 1.1507797683710483
		return res.json({
			requested: numberInMilePerHour,
			FootPerSecond: numberInFootPerSecond,
			MeterPerSecond: numberInMeterPerSecond,
			KilometerPerHour: numberInKilometerPerHour,
			Knot: numberInKnot
		})
	}
}
