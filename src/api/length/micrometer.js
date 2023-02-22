const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "micrometer",
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
		let numberInMicrometer = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInMicrometer / 10000
		let numberInMeter = numberInMicrometer / 1000000
		let numberInKilometer = numberInMicrometer / 1000000000
		let numberInMillimeter = numberInMicrometer / 1000
		let numberInNanometer = numberInMicrometer * 1000
		let numberInMile = numberInMicrometer * 6.2137e-10
		let numberInYard = numberInMicrometer / 914400
		let numberInFoot = numberInMicrometer / 304800
		let numberInInch = numberInMicrometer / 25400
		let numberInNauticalMile = numberInMicrometer * 5.3996e-10
		return res.json({
			requested: numberInMicrometer,
			Centimeter: numberInCentimeter,
			Meter: numberInMeter,
			Kilometer: numberInKilometer,
			Millimeter: numberInMillimeter,
			Nanometer: numberInNanometer,
			Mile: numberInMile,
			Yard: numberInYard,
			Foot: numberInFoot,
			Inch: numberInInch,
			NauticalMile: numberInNauticalMile
		})
	}
}
