const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("static"))

app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/bookbank", (req, res)=>{
    res.render("bookbank")
})

app.get("/activities", (req, res)=>{
    res.render("activities")
})

app.get("/videos", (req, res)=>{
    res.render("videos")
})

app.get("/articles", (req, res)=>{
    res.render("articles")
})

app.listen(3000, (req, res)=>{
    console.log("Server is running on port 3000")
})