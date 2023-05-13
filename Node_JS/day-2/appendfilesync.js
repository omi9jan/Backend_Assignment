const fs=require('fs');
try{
    let data = fs.appendFileSync("./text2.txt","\n i am omi");
    console.log("data added");
}
catch(err){
    console.log(err)
}