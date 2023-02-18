const { readdirSync } = require("fs")
const { db } = require("./dataBase.js")
const express = require("express")
const routerAPI = express.Router()
routerAPI.use(express.json())
routerAPI.get("/test", async (req, res) => {
	res.send("hit test")
})
async function loadRoutes() {
	//wanted to avoid this, but whatever
	let endpointsInArray = await db.get("endpointsInArray")
	let loadRouteDirectories = await readdirSync("./src/api").filter(dirs => dirs)
	for(const dirs of loadRouteDirectories) {
		let loadApiFile = await readdirSync(`./src/api/${dirs}`).filter(file => file.endsWith(".js"))
		for(const file of loadApiFile) {
			const { category, execute, name, utilisation } = require(`../api/${dirs}/${file}`)
			if(endpointsInArray === null || !endpointsInArray.includes(name)) await db.push("endpointsInArray", name)
			// Will phase out endpointsInArray for a better solution
			routerAPI.post(`/${name}`, async (req, res) => {
				if(!req.body) return res.json({ error: "You need to provide a json request!" })
				execute(req, res)
			})
			routerAPI.get(`/${name}`, async (req, res) => {
				res.send(`${utilisation}<br>Feel free to contact pendragon's code should there be any issues at all!`)
			})
		}
	}
}
loadRoutes()
module.exports = routerAPI
