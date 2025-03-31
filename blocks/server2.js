//ODM-> Object Document Mapper
const express=require("express");
const app=express()
const mongoose=require("mongoose");
const User=require("./model/userModel")
const Blog=require("./model/blogModel")

app.post("/users",async(req,res)=>{
  let {name,email,password}=req.body;
  let newUser=new User({
    name:name,
    email:email,
    password:password,
  });
  await newUser.save()
  res.send("User Added")
})

//read all users
app.get("/users",async(req,res)=>{
  let allUsers=await User.find();
  res.send(allUsers);
})

//read one user
app.get("/users/:id",async(req,res)=>{
  let {id}=req.params;
  let oneUser=await User.findById(id);
  res.send(oneUser)
})
//delete user
app.delete("/user/id",async(req,res)=>{
  let {id}=req.params;
  await User.findByIdAndDelete()
  res.send("User deleted")
})
//update a user
app.put("users/:id",async(req,res)=>{
  let {id}=req.params;
  let {name,email,password}=req.body;
  let updateUser=await User.findById(id);
  updateUser.name=name;
  updateUser.email=email;
  updateUser.password=password;
  await updateUser.save();
})


//add one blog
app.post("/blogs",async(req,res)=>{
  let {title,content,author,date}=req.body;
  let newBlog=new Blog({
    title:title,
    content:content,
    author:author,
    date:date
  });
  await newBlog.save()
  res.send("Blog Added")
})

//read all blogs
app.get("/blogs",async(req,res)=>{
  let allBlogs=await Blog.find();
  res.send(allBlogs);
})

//read one blog
app.get("/blogs/:id",async(req,res)=>{
  let {id}=req.params;
  let oneBlog=await Blog.findById(id);
  res.send(oneBlog)
})

app.put("blogs/:id",async(req,res)=>{
  let {id}=req.params;
  let {title,content,author,date}=req.body;
  let updateBlog=await Blog.findById(id);
  updateBlog.title=title;
  updateBlog.content=content;
  updateBlog.author=author;
  updateBlog.date=date
  await updateBlog.save();
})

mongoose.connect('mongodb://127.0.0.1:27017/mongooseDB')
  .then(() => console.log('Connected!'));
app.listen(2000,()=>{
    console.log("Server started");
})




