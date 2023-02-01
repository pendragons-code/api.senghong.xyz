const { db } = require("./dataBase.js")
async function AddEndpoints(name) {
	const endpointsInDB = await db.get(`endpointsInDB`)
	if(endpointsInDB !== null && endpointsInDB.includes(name)) return
	await db.push(`endpointsInDB`, name)
}
module.exports = { AddEndpoints }
