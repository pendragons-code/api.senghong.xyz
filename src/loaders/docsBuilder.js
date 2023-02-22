const { db } = require("./dataBase.js")
const express = require("express")
const docsRouter = express.Router()
docsRouter.get("/test", async (req, res) => {
	res.send("hit test")
})
async function loadDocs() {
	//Really wanted to avoid this!
	let endpointsUtilisation = await db.get("endpointsUtilisation")
	//Issue: db is trying to get endpointsUtilisation, but the thing is not working because the thing is null when this whole thing has ran for the first time.
	let endpointsUtilisationByCategory = ""
	if(endpointsUtilisation === null) return console.log("DB has not gotten the endpoint utilisation, try running the project again!")
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
