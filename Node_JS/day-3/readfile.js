const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    if(req.url == "/")
    {
        res.write("this is home page");
        res.end();
    }
    else if(req.url == "/about")
    {
        res.end("this is about page");
    }
    else if(req.url == "/data")
    {
        try{
            let content = fs.readFileSync("./db.json", "utf-8");
            res.end(content);
        }
        catch(err){
            console.log("error:",err)
        }
    }
    else if(req.url == "/write")
    {
        try
        {
            let text_data = fs.writeFileSync("./text.txt", "I m creating new file and writing Hello everyone")
            console.log("data added successfully");
        }
        catch(err)
        {
            console.log("rerror:",err);
            res.end(err)
        }   
    }
})

server.listen(1666, () => {
    console.log("server is running")
})