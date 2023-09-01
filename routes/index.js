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
router.post("/notes", (req, res) => {
    const notesData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    notesData.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(notesData))
    res.json(notesData)
})

module.exports = router