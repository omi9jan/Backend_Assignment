//taking i/p from terminal

const fs = require("fs");

console.log(process.argv);
/*o/p:- [
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\MASAI_SCHOOL_ASSIGNMENTS\\BACKEND\\Backend_Assignment\\Node_JS\\day-2\\index.js',
  '10',
  '10'
] */

// let num1 = +process.argv[2];
// let num2 = +process.argv[3];
// console.log("Answer : ",num1 + num2);

let data = process.argv[2];

fs.appendFile("./text2.txt",data,(err)=>{
    if(err)
    {
        console.log("error :",err);
    }
    else{
        console.log("data is added to previous data in file");
    }
})