const fs = require('fs');
try{
    let data = fs.writeFileSync("./text1.txt","Hello everyone from fs.writefileSync");
    console.log("Data added to text1.txt successfull");
    // console.log(data);
}
catch(err)
{
    console.log("Error :",err);
}

//o/p:- Data added to text1.txt successfull
//in text1.txt file data added as "Hello everyone from fs.writefileSync"
//but in text1.txt file everytime content get overwritten(means previous content get deleted)
//to overcome this "appendFile" comes in picture.