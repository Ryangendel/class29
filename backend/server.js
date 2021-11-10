const express = require("express")
const bodyParse = require("body-parser")
const cors = require("cors")
const path = require("path")

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

const dog = require("./api/bulldog")
app.use("/bulldog/skadi", dog)

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

app.listen(PORT, ()=>{
    console.log("lsitening on port: "+ PORT)
})






