const { db } = require("../../loaders/dataBase.js")
module.exports = {
	name: "error",
	category: "report",
	utilisation: `
	{
		errorName: "Bananas on 404 pages!",
		errorDescription: "The 404 pages are bananas!"
	}
	`,
	async execute(req, res) {
		if(!req.body.errorName) return res.json({ error: "You need to provide an error name for me to parse!" })
		if(req.body.errorName.length < 10) return res.json({ error: "Your error name must be more than 25 characters!" })
		if(req.body.errorName.length > 200) return res.json({ error: "Your error name must not be more than 200 characters" })

		if(!req.body.errorDescription) return res.json({ error: "I need a description of the error!" })
		if(req.body.errorDescription.length < 25) return res.json({ error: "Your error description needs to be at least 25 characters long!" })
		if(req.body.errorDescription.length > 50000) return res.json({ error: "We avoid allowing error descriptions over 50000 characters long to prevent the likelyhood of spam. But if this really is an actual error please contact the dev. Like legit. What the heck.", contactMe: "https://code.senghong.xyz" })

		await db.add(`SuccessfulRequestCounter`, 1)
		await db.add(`errorCounter`, 1)
		const errorCounter = await db.get(`errorCounter`)
		await db.set(`errorDetails_${errorCounter}`, { name: req.body.errorName, description: req.body.errorDescription })

		return res.json({
			message: "Thank you for telling us about this issue! We will try to patch the issue shortly!",
			contactMe: "https://code.senghong.xyz",
			issueNumber: "errorCounter"
		})
	}
}
