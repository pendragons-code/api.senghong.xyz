const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "nauticalMile",
	category: "length",
	utilisation: `
	{
		requestedLength: 5
	}
	`,
	async execute(req, res) {
		if(!req.body.requestedLength) return res.json({ error: noJsonProvided })
		if(isNaN(req.body.requestedLength)) return res.json({ error: noNumberProvided })
		await db.add(`SuccessfulRequestCounter`, 1)
		let numberInNauticalMile = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInNauticalMile * 185200
		let numberInMeter = numberInCentimeter / 100
		let numberInKilometer = numberInMeter / 1000
		let numberInMillimeter = numberInCentimeter * 10
		let numberInMicrometer = numberInCentimeter * 10000
		let numberInNanometer = numberInCentimeter * 1e+7
		let numberInMile = numberInNauticalMile * 1.151
		let numberInYard = numberInNauticalMile * 2025.37
		let numberInFoot = numberInNauticalMile * 6076.12
		let numberInInch = numberInNauticalMile * 72913.4
		return res.json({
			requested: numberInNauticalMile,
			Centimeter: numberInCentimeter,
			Meter: numberInMeter,
			Kilometer: numberInKilometer,
			Millimeter: numberInMillimeter,
			Micrometer: numberInMicrometer,
			Nanometer: numberInNanometer,
			Mile: numberInMile,
			Yard: numberInYard,
			Foot: numberInFoot,
			Inch: numberInInch
		})
	}
}
