const express = require('express')
const database = require("./database")

const app = express()

const port = 4000

var cors = require('cors')
app.use(cors())

app.get('/items', async (req, res) => {
    database.connect();
    const items = await database.query('SELECT * FROM items')
    database.disConnect();
    res.send(items)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})