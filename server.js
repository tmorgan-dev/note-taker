//helper variables
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const routes = require("./routes/index.js")

const app = express();

//middleware
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

//HTML routes for the landing page and the notes page
app.use("/api/", routes)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App listening at http://localhost:${PORT}`)
})