const { readdirSync } = require("fs")
const { db } = require("./dataBase.js")
const express = require("express")
const routerAPI = express.Router()
routerAPI.use(express.json())
routerAPI.get("/test", async (req, res) => {
	res.send("hit test")
})
readdirSync(`./src/api/`).forEach(async (dirs) => {
	const loadApiFile = readdirSync(`./src/api/${dirs}`).filter(file => file.endsWith(".js"))
	for await (const file of loadApiFile) {
		const { execute, name } = await require(`../api/${dirs}/${file}`)
		let endpointsInArray = await db.get("endpointsInArray")
		if(endpointsInArray === null || !endpointsInArray.includes(name)){
			await db.push("endpointsInArray", name)
			console.log(name)
			console.log(endpointsInArray)
		}
		routerAPI.post(`/${name}`, async (req, res) => {
			if(!req.body) return res.json({ error: "You need to provide a json request!" })
			execute(req, res)
		})
	}
})
module.exports = routerAPI
