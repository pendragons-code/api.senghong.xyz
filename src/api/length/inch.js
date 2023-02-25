const { noNumberProvided, invalidRequest } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "inch",
	category: "length",
	utilisation: `
	{
		requestedLength: 5
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedLength) return res.json({ error: invalidRequest })
		if(isNaN(req.body.requestedLength)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInInch = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInInch * 2.54
		let numberInMeter = numberInInch / 39.37
		let numberInKilometer = numberInMeter * 1000
		let numberInMillimeter = numberInInch * 25.4
		let numberInMicrometer = numberInInch * 25400
		let numberInNanometer = numberInInch * 2.54e+7
		let numberInMile = numberInInch / 63360
		let numberInYard = numberInInch / 36
		let numberInFoot = numberInInch / 12
		let numberInNauticalMile = numberInInch / 72910
		return res.json({
			requested: numberInInch,
			Centimeter: numberInCentimeter,
			Meter: numberInMeter,
			Kilometer: numberInKilometer,
			Millimeter: numberInMillimeter,
			Micrometer: numberInMicrometer,
			Nanometer: numberInNanometer,
			Mile: numberInMile,
			Yard: numberInYard,
			Foot: numberInFoot,
			NauticalMile: numberInNauticalMile
		})
	}
}
