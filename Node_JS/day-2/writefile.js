const fs = require("fs");
fs.writeFile("./text1.txt","I want to write Good Morning EveryOne",(err) => {
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Data added to text1.txt file successfully");
    }
})

//output:- Data added to text1.txt file successfully & 
//in text1.txt file data added as "I want to write Good Morning EveryOne"