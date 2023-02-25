const { noNumberProvided, invalidRequest } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "gradian",
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
		let numberInGradian = parseFloat(req.body.requestedAngle)
		let numberInDegrees = numberInGradian * 0.9
		let numberInRadian = Math.PI/200 * numberInGradian
		let numberInMilliradian = numberInRadian * 1000
		let numberInSecondOfArc = numberInGradian * 3240
		let numberInMinuteOfArc = numberInGradian * 54
		return res.json({
			requested: numberInRadian,
			Degrees: numberInDegrees,
			Radian: numberInRadian,
			Milliradian: numberInMilliradian,
			SecondOfArc: numberInSecondOfArc,
			MinuteOfArc: numberInMinuteOfArc
		})
	}
}
