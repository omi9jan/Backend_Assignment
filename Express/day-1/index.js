const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url == "/")
    {
        res.setHeader("Content-type","text/html")
        res.end("<h1>This is home page<h1>");
    }
    else if(req.url == "/adddata" && req.method == "POST")
    {
        let str=''
        req.on("data",(chunk)=>{
            str+=chunk
        })
        res.on("end",()=>{

            console.log(str)
            res.end(str)
        })
        console.log("data:",str)
        res.end("Post this data")
    }
})

server.listen(8000,()=>{
    console.log(("server is running"))
})