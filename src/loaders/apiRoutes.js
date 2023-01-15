const { readdirSync } = require("fs")
const express = require("express")
const routerAPI = express.Router()
routerAPI.use(express.json())
routerAPI.get("/test", async (req, res) => {
	res.send("hit test")
})
readdirSync(`./src/api/`).forEach(dirs => {
	const loadApiFile = readdirSync(`./src/api/${dirs}`).filter(file => file.endsWith(".js"))
	for(const file of loadApiFile) {
		const { execute, name } = require(`../api/${dirs}/${file}`)
		routerAPI.post(`/${name}`, async (req, res) => {
			if(!req.body) return res.json({ error: "You need to provide a json request!" })
			execute(req, res)
		})
	}
})

module.exports = routerAPI
