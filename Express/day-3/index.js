const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json())

//GET Request:

app.get("/",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"))
    console.log(data)
    res.send(data)
})
app.get("/students",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    res.send(data.students)
})
app.get("/instructors",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    res.send(data.instructors)
})

//POST request:

app.post("/addnewstudent",(req,res)=>{
    // console.log(req.body);
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.students.push(req.body);
    console.log(data)

    fs.writeFileSync("./db.json",JSON.stringify(data))
   
    res.send("Data is posted")
})
app.post("/addnewinstructor",(req,res)=>{
    
    let data1 = JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data1.instructors.push(req.body);
    console.log("new_instuctor :",data1)

    fs.writeFileSync("./db.json",JSON.stringify(data1))
    res.send("New instructor posted")
    
})

//Update Request :

app.patch("/update",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    for(let i=0; i<data.students; i++)
    {
        if(data.students[i].Name == "Omkareshwari Khupse")
        {
            data.students[i].City = req.body.City
        }
    }

    fs.writeFileSync("./db.json",JSON.stringify(data))
    console.log("Updated_data:",data)
    res.send("Students data is updated")
})

//Delete Request :

app.delete("/delete",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let new_data = data.students.filter((el)=>{
        return(el.Name != "Neha Bansod")
    })

    data.students = new_data
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Deleted successfully")
})



app.listen(8000,()=>{
    console.log("Server is running!!!")
})