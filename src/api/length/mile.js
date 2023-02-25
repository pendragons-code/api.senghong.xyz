const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "mile",
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
		let numberInMile = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInMile * 160934
		let numberInMeter = numberInMile * 1609.34
		let numberInKilometer = numberInMile * 1.60934
		let numberInMillimeter = numberInMile * 1.609e+6
		let numberInMicrometer = numberInMile * 1.609e+9
		let numberInNanometer = numberInMile * 1.609e+12
		let numberInYard = numberInMile * 1760
		let numberInFoot = numberInMile * 5480
		let numberInInch = numberInMile * 63360
		let numberInNauticalMile = numberInMile * 0.868976
		return res.json({
			requested: numberInMile,
			Centimeter: numberInCentimeter,
			Meter: numberInMeter,
			Kilometer: numberInKilometer,
			Millimeter: numberInMillimeter,
			Micrometer: numberInMicrometer,
			Nanometer: numberInNanometer,
			Yard: numberInYard,
			Foot: numberInFoot,
			Inch: numberInInch,
			NauticalMile: numberInNauticalMile
		})
	}
}
