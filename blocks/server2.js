//ODM-> Object Document Mapper
const express=require("express");
const app=express()
const mongoose=require("mongoose");
const User=require("./model/user")
const Blog=require("./model/server")
const userRoute=require('./route/userroute');
const blogRoute=require('./route/blogsroute');
//hr request pe chlega like middleware but ek condition hai ki base path users hona chahiye
app.use("/users",userRoute)
app.use("/blog",blogRoute)
// app.post("/users",async(req,res)=>{
//   let {name,email,password}=req.body;
//   let newUser=new User({
//     name:name,
//     email:email,
//     password:password,
//   });
//   await newUser.save()
//   res.send("User Added")
// })



// app.get("/users",async(req,res)=>{
//   let allUsers=await User.find();
//   res.send(allUsers);
// })



// app.get("/users/:id",async(req,res)=>{
//   let {id}=req.params;
//   let oneUser=await User.findById(id);
//   res.send(oneUser)
// })


// app.delete("/user/id",async(req,res)=>{
//   let {id}=req.params;
//   await User.findByIdAndDelete()
//   res.send("User deleted")
// })


// app.put("users/:id",async(req,res)=>{
//   let {id}=req.params;
//   let {name,email,password}=req.body;
//   let updateUser=await User.findById(id);
//   updateUser.name=name;
//   updateUser.email=email;
//   updateUser.password=password;
//   await updateUser.save();
// })


// app.post("/",async(req,res)=>{
//   let {title,content,author,date}=req.body;
//   let newBlog=new Blog({
//     title:title,
//     content:content,
//     author:author,
//     date:date
//   });
//   await newBlog.save()
//   res.send("Blog Added")
// })



// app.get("/",async(req,res)=>{
//   let allBlogs=await Blog.find();
//   res.send(allBlogs);
// })



// app.get("/:id",async(req,res)=>{
//   let {id}=req.params;
//   let oneBlog=await Blog.findById(id);
//   res.send(oneBlog)
// })



// app.put("/:id",async(req,res)=>{
//   let {id}=req.params;
//   let {title,content,author,date}=req.body;
//   let updateBlog=await Blog.findById(id);
//   updateBlog.title=title;
//   updateBlog.content=content;
//   updateBlog.author=author;
//   updateBlog.date=date
//   await updateBlog.save();
// })




// mongoose.connect('mongodb://127.0.0.1:27017/mongooseDB')
//   .then(() => console.log('Connected!'));






// app.listen(2000,()=>{
//     console.log("Server started");
// })