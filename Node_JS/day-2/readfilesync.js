const fs = require('fs');
let data = fs.readFileSync("./text.txt");
console.log(data)


//output:-  <Buffer 49 20 61 6d 20 6c 65 61 72 69 6e 67 20 6e 6f 64 65 20 6a 73 20 46 69 72 73 74 20 74 69 6d 65 2e>
//gives me bufer data of what text is written inside text.txt file.
//modify by using "utf-8"

let data1 = fs.readFileSync("./text.txt","utf-8");
console.log(data1);

//output:- I am learing node js First time.

//but in sync file if error is present then how to detect that
//so here use try & catch method 
//becoz we r not using call back function here like used in fs.readfile 

try{
    let data2 = fs.readFileSync("./text.txt","utf-8")
    console.log(data2);
}
catch(error){
    console.log("error happed : ",error);
}

//output:- I am learing node js First time.