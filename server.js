const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const PORT = process.env.PORT

const projects = require("./projects.json")
const about = require("./about.json")


const app = express()

app.use(cors())
app.use(morgan('dev'))

app.get("/",(req,res)=>{
    res.send("hello world")
})





app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))