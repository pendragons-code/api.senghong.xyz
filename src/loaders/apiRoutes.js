const { readdirSync } = require("fs")
const { noJsonProvided } = require("../../assets/errorMessages.json")
const { db } = require("./dataBase.js")
const express = require("express")
const routerAPI = express.Router()
routerAPI.use(express.json({ limit: "100mb" }))
routerAPI.get("/test", async (req, res) => {
	res.send("hit test")
})
async function loadRoutes() {
	//wanted to avoid this, but whatever
	let endpointsInArray = await db.get("endpointsInArray")
	let endpointsUtilisation = await db.get("endpointsUtilisation")
	let loadRouteDirectories = await readdirSync("./src/api").filter(dirs => dirs)
	let listOfCategories = []
	for(const dirs of loadRouteDirectories) {
		let loadApiFile = await readdirSync(`./src/api/${dirs}`).filter(file => file.endsWith(".js"))
		for(const file of loadApiFile) {
			const { category, execute, name, utilisation } = require(`../api/${dirs}/${file}`)
			if(endpointsInArray === null || !endpointsInArray.includes(`${name} - ${category}`)) await db.push("endpointsInArray", `${name} - ${category}`)
			if(endpointsUtilisation === null || endpointsUtilisation[category] === null || endpointsUtilisation[category] === undefined) await db.set(`endpointsUtilisation.${category}`, utilisation)
			if(!listOfCategories.includes(category)) listOfCategories.push(category)
			routerAPI.post(`/${name}`, async (req, res) => {
				if(!req.body) return res.json({ error: noJsonProvided })
				execute(req, res)
			})
			routerAPI.get(`/${name}`, async (req, res) => {
				res.send(`${utilisation}<br>Feel free to contact pendragon's code should there be any issues at all!`)
			})
		}
	}
	await db.set("listOfCategories", listOfCategories)
}
loadRoutes()
module.exports = routerAPI
