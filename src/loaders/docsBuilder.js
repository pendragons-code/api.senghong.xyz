const { db } = require("./dataBase.js")
const { domain } = require("../../configuration/hosting.json")
const env = require("dotenv").config()
const express = require("express")
const docsRouter = express.Router()
docsRouter.get("/test", async (req, res) => {
	res.send("hit test")
})
async function loadDocs() {
	//Really wanted to avoid this!
	const port = process.env.port
	let endpointsUtilisation = await db.get("endpointsUtilisation")
	let endpointsUtilisationByCategory = ""
	if(endpointsUtilisation !== null) endpointsUtilisationByCategory = Object.keys(endpointsUtilisation)
	for(const endpointsUtilisationForFrontEnd of endpointsUtilisationByCategory){
		docsRouter.get(`/${endpointsUtilisationForFrontEnd}`, async (req, res) => {
			res.render("docs.ejs", { docs: await db.get(`endpointsUtilisation.${endpointsUtilisationForFrontEnd}`)})
			// I hate adding strings, but I really had to because it is 4am and my brai cannot regex
		})
	}
}
loadDocs()
module.exports = docsRouter 
