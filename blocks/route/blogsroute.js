const express=require("express");
const router = express.Router();
router.post("/blogs",async(req,res)=>{
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



router.get("/blogs",async(req,res)=>{
  let allBlogs=await Blog.find();
  res.send(allBlogs);
})


module.exports = router;