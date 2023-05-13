const fs = require("fs");
fs.readFile("./text.txt",(err,data) => {
    if(err)
    {
        console.log("error");
    }
    else{
        console.log(data);
    }
})

//output:-  <Buffer 49 20 61 6d 20 6c 65 61 72 69 6e 67 20 6e 6f 64 65 20 6a 73 20 46 69 72 73 74 20 74 69 6d 65 2e>
//gives me bufer data of what text is written inside text.txt file.
//modify by using "utf-8"

fs.readFile("./text.txt","utf-8",(error,data) => {
    if(error)
    {
        console.log("Error Happend");
    }
    else{
        console.log(data);
    }
})

//output:- I am learing node js First time.