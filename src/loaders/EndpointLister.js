const { db } = require("./dataBase.js")
async function AddEndpoints(name) {
	const endpointsInDB = await db.get(`endpointsInDB`)
	if(endpointsInDB !== null && endpointsInDB.includes(name)) return
	await db.push(`endpointsInDB`, name)
	console.log(await db.get(`endpointsInDB`))
}
module.exports = { AddEndpoints }
