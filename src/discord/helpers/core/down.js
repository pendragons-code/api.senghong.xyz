const axios = require("axios")
const { ToSendID } = require("../../../../configuration/ToSendID.json")
module.exports = async (bot) => {
	let UserID = await bot.users.fetch(ToSendID)
	//this is the dumb part, i cannot just send it while it is uncached
	console.log(UserID.id)
	axios({
		method: "post",
		url: "http://localhost:3000/api/celsius",
		headers: {
			"Content-Type": "application/json"
		},
		data: {
			requestedTemperature: 1/3
		}
	}).catch( async () => {
		bot.users.cache.get(UserID.id).send("Site Down")
	})
}
