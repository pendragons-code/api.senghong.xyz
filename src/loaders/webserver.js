const express = require("express")
const helmet = require("helmet")
const env = require("dotenv").config()
const rateLimit = require("express-rate-limit")
const { join } = require("path")
const { windowMinutes, maxWindowRequest, standardHeaders, legacyHeaders } = require("../../configuration/rateLimit.json")
const apiRoute = require("./apiRoutes.js")
const frontEnd = require("./frontEnd.js")
const docsRouter = require("./docsBuilder.js")
const app = express()
const port = process.env.port

if(!port) return console.log("Port is empty!")

//I am aware that there is a way to do this with just one app.use, but i was adviced against using it because it would be unreadable!
const limiter = rateLimit({
	windowMs: windowMinutes * 60000,
	max: maxWindowRequest,
	standardHeaders: standardHeaders,
	legacyHeaders: legacyHeaders
})
app.use(function(req, res, next) {
	res.setHeader("Content-Security-Policy", "frame-ancestors 'self';")
	next()
})
app.use(helmet())
app.use(limiter)
app.use("/api/", apiRoute)
app.use("/docs/", docsRouter)
app.use("/", frontEnd)
app.set("view engine", "ejs")
app.set("views", join(__dirname, "../frontEnd/views"))
app.use(express.static(join(__dirname, "../frontEnd/public")))
app.use(function(req, res) {
	res.status(404).json({
		404: "🍌, 404",
		error: "404"
	})
})
app.listen((port), async () => {
	console.log(`Hanging onto dear life at ${process.pid}\nCurrently listening at http://localhost:${port}!`)
})
