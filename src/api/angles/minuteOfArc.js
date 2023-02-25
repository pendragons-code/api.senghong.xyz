const { noNumberProvided, invalidRequest } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "minuteOfArc",
	category: "angles",
	utilisation: `
	{
		requestedAngle: 5
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedAngle) return res.json({ error: invalidRequest })
		if(isNaN(req.body.requestedAngle)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInMinuteOfArc = parseFloat(req.body.requestedAngle)
		let numberInDegrees = numberInMinuteOfArc / 60
		let numberInRadian = numberInMinuteOfArc * Math.PI / (60 * 180)
		let numberInGradian = numberInMinuteOfArc / 54
		let numberInMilliradian = numberInRadian * 1000
		let numberInSecondOfArc = numberInMinuteOfArc * 60
		return res.json({
			requested: numberInMinuteOfArc,
			Degrees: numberInDegrees,
			Radian: numberInRadian,
			Gradian: numberInGradian,
			Milliradian: numberInMilliradian,
			SecondOfArc: numberInSecondOfArc
		})
	}
}
