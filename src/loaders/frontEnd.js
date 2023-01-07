const { readdirSync } = require("fs")
const express = require("express")
const routerFrontEnd = express.Router()

const loadFrontEndFile = readdirSync("./src/webPages/PageLoader").filter(files => files.endsWith(".js"))
for(const file of loadFrontEndFile) {
	const { execute, name } = require(`../webPages/PageLoader/${file}`)
	routerFrontEnd.get(`/${name}`, async (req, res) => {
		execute(req, res)
	})
}

module.exports = routerFrontEnd
