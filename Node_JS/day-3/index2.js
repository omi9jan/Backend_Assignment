//same code but by using "res.write"

const http = require("http");
const server = http.createServer((req,res) => {
    //write logic here
    if(req.url=="/"){
        res.end("This is home page");
    }
    else if(req.url == "/about"){
        res.write("This is about page");
        res.end()
    }
    else if(req.url == "/contact"){
        res.end("Contact Me!!!")
    }
})

server.listen(1234, ()=>{
    console.log("server is running")
})