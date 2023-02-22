const { QuickDB } = require("quick.db")
const db = new QuickDB({ filePath: "DataBase/database.sqlite" })
module.exports = { db }
