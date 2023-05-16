const express = require("express");
const app = express();

app.use(express.json())
app.get("/", (req,res)=>{
    res.setHeader("Content-type","text/html")
    res.send("<h1>Welcome to our Home page from omi<h1>");
})

app.post("/adddata",(req,res)=>{
    console.log(req.body)
    res.send("positing data")
})

app.listen(7000);