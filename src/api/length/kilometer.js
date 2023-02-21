const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "kilometer",
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
		let numberInKilometer = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInKilometer * 100000
		let numberInMeter = numberInKilometer * 1000
		let numberInMillimeter = numberInKilometer * 1000000
		let numberInMicrometer = numberInKilometer * 1000000000
		let numberInNanometer = numberInKilometer * 1000000000000
		let numberInMile = numberInKilometer * 0.621371
		let numberInYard = numberInKilometer * 1093.61
		let numberInFoot = numberInKilometer * 3280.84
		let numberInInch = numberInKilometer * 39370.1
		let numberInNauticalMile = numberInKilometer / 1.852
		return res.json({
			requested: numberInKilometer,
			Centimeter: numberInCentimeter,
			Meter: numberInMeter,
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
