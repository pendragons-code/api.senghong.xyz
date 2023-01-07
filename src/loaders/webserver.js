const express = require("express")
const env = require("dotenv").config()
const rateLimit = require("express-rate-limit")
const { join } = require("path")

const { windowMinutes, maxWindowRequest, standardHeaders, legacyHeaders } = require("../../configuration/rateLimit.json")
const apiRoute = require("./apiRoutes.js")
const frontEnd = require("./frontEnd.js")
const app = express()
const port = process.env.port

//I am aware that there is a way to do this with just one app.use, but i was adviced against using it because it would be unreadable!
const limiter = rateLimit({
	windowMs: windowMinutes * 60000,
	max: maxWindowRequest,
	standardHeaders: standardHeaders,
	legacyHeaders: legacyHeaders
})

app.use(limiter)
app.use("/api/", apiRoute)
app.use("/", frontEnd)
app.set("view engine", "ejs")
app.set("views", join(__dirname, "../webPages/views"))
app.use(express.static(join(__dirname, "../webPages/public")))
//app.use(function(req, res) {
//	res.status(404).send("🍌, 404")
//})
app.listen((port), async () => {
	console.log(`Hanging onto dear life at ${process.pid}\n Currently listening at http://localhost:${port}!`)
})
