module.exports = {
	name: "link",
	description: "Sends out link!",
	async execute({ bot, interactionCreate }) {
		interactionCreate.reply({ content: "https://api.senghong.xyz" })
	}
}
