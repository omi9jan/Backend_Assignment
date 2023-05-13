const fs = require("fs");
fs.appendFile("./text2.txt","Adding new content to file using fs.appendFile",(err)=>{
    if(err)
    {
        console.log("error :",err);
    }
    else{
        console.log("data is added to previous data in file");
    }
})
//o/p:- data is added to previous data in file
//in text2.txt file data added as "Adding new content to file using fs.appendFile" without deleting previous content.
//content in text2.txt file is "I am new to node JS.Adding new content to file using fs.appendFile"

//to add data on new line use "\n" before adding any content

fs.appendFile("./text2.txt"," \n write this on new line to file using fs.appendFile",(err)=>{
    if(err)
    {
        console.log("error :",err);
    }
    else{
        console.log("data is added to previous data in file");
    }
})