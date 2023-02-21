const { noNumberProvided, noJsonProvided } = require("../../../assets/errorMessages.json")
const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "millimeter",
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
		let numberInMillimeter = parseFloat(req.body.requestedLength)
		let numberInCentimeter = numberInMillimeter / 10
		let numberInMeter = numberInMillimeter / 1000
		let numberInKilometer = numberInMillimeter / 1000000  // Yes I am aware that 1e-6 would work here, but for the sake of readability, I will use normal number
		let numberInMicrometer = numberInMillimeter * 1000
		let numberInNanometer = numberInMillimeter * 1000000
		let numberInMile = numberInMillimeter / 6.2137e-7 // Ok this cannot be helped because the number is seemingly recurring and it goes on and on
		let numberInYard = numberInMillimeter / 914.4
		let numberInFoot = numberInMillimeter / 304.8
		let numberInInch = numberInMillimeter / 25.4
		let numberInNauticalMile = numberInMillimeter / 1.852e+6
		return res.json({
			requested: numberInMillimeter,
			Centimeter: numberInCentimeter,
			Meter: numberInMeter,
			Kilometer: numberInKilometer,
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
