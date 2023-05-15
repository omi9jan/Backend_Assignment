const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url == "/")
    {
        console.log("This is home page");
    }
})

server.listen(8000,()=>{
    console.log(("server is running"))
})