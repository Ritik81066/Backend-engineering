const express = require('express');
const mongoose = require('mongoose');

const user = require('./model/user');

const app = express();

const PORT = 5000;

app.post('/users',async(req,res)=>{
    let {name,email,password} = req.body;
    let newUser = new user({
        name:name,
        email:email,
        password:password
    });
    await newUser.save();
    res.send("User added");
})

app.get('/users',async(req,res)=>{
    let allusers = await user.find();
    res.send(allusers);
})

app.get('/',(req,res)=>{
    res.status(200).send("Hello Welcome to Home Page");
})

app.delete('/user/:id', async(req,resp)=>{
    let {id}=req.params;
    await user.findByIdAndDelete(id);
    resp.send("user deleted");
})
app.put("/users/:id",async(req,res)=>{
    let {id} =req.params;
    let {name,email,password}=req.body;
    let updateUser=await UserActivation.findById(id);
   // {
        //name:"Nitesh",
        //email:"bubh@yftc.com",
        //password:"qwerty"
    // }
    updateUser.name=name;
    updateUser.password=password;
    updateUser.email=email;
    await updateUser.save();
    res.send("User Updated");
})
mongoose.connect('mongodb://localhost:27017/Mongoose-1')
.then(()=>console.log("Connected!!"))
.catch((err) => console.error("Connection error:", err));

app.listen(PORT,()=>{
    console.log(`server listening at http://localhost:${PORT}`);
})

/*
*/