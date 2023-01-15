const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "FootPerSecond",
	async execute(req, res) {
		if(!req.body.requestedSpeed) return res.json({ error: "You need to provide a number for me to parse!" })
		if(isNaN(parseFloat(req.body.requestedSpeed))) return res.json({ error: "You need to provide a number for me to parse!" })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInFootPerSecond = parseFloat(req.body.requestedSpeed)
		let numberInMilePerHour = numberInFootPerSecond / 5280 * 60 * 60
		let numberInMeterPerSecond = numberInFootPerSecond / 3.281
		let numberInKilometerPerHour = numberInFootPerSecond * 1.097
		let numberInKnot = numberInFootPerSecond / 1.688
	}
}
