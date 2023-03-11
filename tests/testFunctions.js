const { readdirSync } = require("fs")
const { testDomain } = require("../configuration/hosting.json")
const { db } = require("../src/loaders/dataBase")
const env = require("dotenv").config()
const phin = require("phin")
const port = process.env.port
// Note, promised must be used as the quick.db package only returns a promise
async function TestLoadAllEndpoints(date, month, year, hours, minutes, seconds) {
	console.log("Load Begin!")
	/*
	the data saved to the DB should look like this
		
		`endPointTest_ [time here following dd/mm/yyyy/h/m/s]`
		{
			endPointsFailedLoad: ["celsius"],
			endPointsPassedLoad: ["deezNuts"]
		}
	*/
	let loadRouteDirectories = await readdirSync("./src/api").filter(dirs => dirs)
	let timeOfTest = `${date}_${month}_${year}_${hours}_${minutes}_${seconds}`
	for(const dirs of loadRouteDirectories) {
		let loadApiFile = await readdirSync(`./src/api/${dirs}`).filter(file => file.endsWith(".js"))
		for(const file of loadApiFile) {
			const { utilisation, name, category } = require(`../src/api/${dirs}/${file}`)
			if(!utilisation || !name || !category){
				await db.push(`endPointTest_${timeOfTest}.endPointsFailedLoad`, file)
				console.log(`[FAILURE]: ${file}`)
				continue
			}
			await db.push(`endPointTest_${timeOfTest}.endPointsPassedLoad`, name)
			console.log(`[PASS]: ${file}`)
		}
	}
	console.log("Load End!")
	let failures = await db.get(`endPointTest_${timeOfTest}.endPointsFailedLoad`)
	if(failures === undefined) failures = []
	console.log(`Failures: ${failures.length}\n\n\n`)
}
async function TestRequestAllEndpoints(date, month, year, hours, minutes, seconds) {
// This is a dumb move, repeating the same part of the code 2 times, but I am too lazy, I will most likely tidy this up later.
	console.log("Request Start!")
	let loadRouteDirectories = await readdirSync("./src/api").filter(dirs => dirs)
	let timeOfTest = `${date}_${month}_${year}_${hours}_${minutes}_${seconds}`
	for(const dirs of loadRouteDirectories) {
		let loadApiFile = await readdirSync(`./src/api/${dirs}`).filter(file => file.endsWith(".js"))
		for(const file of loadApiFile) {
			const { name, utilisation } = require(`../src/api/${dirs}/${file}`)
			let output = await phin({
				url: `${testDomain}${port}/api/${name}`,
				method: "POST",
				parse: "json",
				data: utilisation
			})
			if(!name || !output.body){
				await db.push(`RequestEndpoint_${timeOfTest}.endPointsFailedLoad`, file)
				console.log(`[FAILURE]: ${file}`)
				continue
			}
			await db.push(`RequestEndpoint_${timeOfTest}.endPointsPassedLoad`, name)
			console.log(`[PASS]: ${file}`)
		}
	}
	console.log("Request End!")
	let failuresRequest = await db.get(`RequestEndpoint_${timeOfTest}.endPointsFailedLoad`)
	if(failuresRequest === undefined) failuresRequest = []
	console.log(`Failures: ${failuresRequest.length}\n\n\n`)
}
module.exports = { TestLoadAllEndpoints, TestRequestAllEndpoints }
