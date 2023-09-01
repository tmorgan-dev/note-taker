const router = require("express").Router()
const {v4:uuidv4} = require("uuid")
const fs = require("fs")


router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        let notesData = JSON.parse(data)
        res.json(notesData)
    })
})

module.exports = router