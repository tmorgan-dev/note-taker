const router = require("express").Router()
const {v4:uuidv4} = require("uuid")
const fs = require("fs")

//route to get the note data in the json database
router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        let notesData = JSON.parse(data)
        res.json(notesData)
    })
})
//route to save the note data in the json database
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

//route to delete the data from the json database, using the created by the uuid when the note data was saved
router.delete("/notes/:id", (req, res) => {
    const notesData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    const notesCollection = notesData.filter((note) => {
        return note.id !== req.params.id

    })
    fs.writeFileSync("./db/db.json", JSON.stringify(notesCollection))
    res.json(console.log({message:"You deleted your note"}))
})

module.exports = router