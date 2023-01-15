module.exports = async (bot) => {
	console.log(`Logged in as ${bot.user.tag}.`)
	bot.down
	setInterval( function() {
		bot.down
	}, 600000)
}
