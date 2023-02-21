const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "centimeters",
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
		let numberInCentimeter = parseFloat(req.body.requestedLength)
		let numberInMeter = numberInCentimeter / 100
		let numberInKilometer = numberInCentimeter / 1000
		let numberInMillimeter = numberInCentimeter * 10
		let numberInMicrometer = numberInCentimeter * 10000
		let numberInNanometer = numberInCentimeter * 10000000
		let numberInMile = numberInCentimeter * 1.60934 / 100000
		let numberInYard = numberInCentimeter * 91.44
		let numberInFoot = numberInCentimeter / 30.48
		let numberInInch = numberInCentimeter / 2.54
		let numberInNauticalMile = numberInCentimeter / 185200
		return res.json({
			requested: numberInCentimeter,
			Meter: numberInMeter,
			Kilometer: numberInKilometer,
			Millimeter: numberInMillimeter,
			Micrometer: numberInMicrometer,
			Nanometer: numberInNanometer,
			Mile: numberInMile,
			Yard: numberInYard,
			Foot: numberInFoot,
			Inch: numberInInch,
			NauticalMile: numberInNauticalMile
		})
	}
}
