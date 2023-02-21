const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "KilometerPerHour",
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
		let numberInKilometerPerHour = parseFloat(req.body.requestedSpeed)
		let numberInMilePerHour = numberInKilometerPerHour / 1.6093444978925633
		let numberInFootPerSecond = numberInKilometerPerHour / 1.0972805000087782
		let numberInMeterPerSecond = numberInKilometerPerHour / 3.6
		let numberInKnot = numberInKilometerPerHour / 1.852
		return res.json({
			requested: numberInKilometerPerHour,
			MilePerHour: numberInMilePerHour,
			FootPerSecond: numberInFootPerSecond,
			MeterPerSecond: numberInMeterPerSecond,
			Knot: numberInKnot
		})
	}
}
