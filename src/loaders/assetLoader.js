const { readFile } = require("fs")
async function checkAssets() {
	readFile("./assets/rockyou.txt", "utf8", async function(err, data){
		if(!data || err) return console.log("\n[ALERT: MISSING ASSETS!] 'rockyou.txt' DOES NOT EXIST IN THE EXPECTED LOCATION!!!!\n")
	})
}
checkAssets()
