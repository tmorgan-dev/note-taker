const express = require('express');
const path = require('path');
const PORT = 3001;
const routes = require("./routes/index.js")

const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))
app.use("/api/",routes)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
