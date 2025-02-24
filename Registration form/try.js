const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))
let userData=[]
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})
app.post("/adduser",(req,res)=>{
    let {username,useremail,userpassword} = req.body;
    //default type of data sent by a form is url-encoded
    //express.urlEncoded is the function used to parse url-encoded to object type
    console.log(username,useremail,userpassword)
    let newUser={
        name:username,
        email:useremail,
        password:userpassword,
    }
    userData.push(newUser)
    res.send(userData);
})


app.listen(5000,()=>{
    console.log("server started");
})