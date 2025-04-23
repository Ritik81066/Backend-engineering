const express=require("express");
const router = express.Router();
router.post("/users",async(req,res)=>{
  let{name,email,password}=req.body;
  let newUser=new User({
    name:name,
    email:email,
    password:password
  });
  await newUser.save()
  res.send("User added");
})
//read all users
router.get("/users",async(req,res)=>{
  let allusers=await User.find();
  res.send(allusers)
})
//read one user
router.get("/users/:id",async(req,res)=>{
  let {id}=req.params;
  let oneUser=await User.findById(id);
  res.send(oneUser)
})

module.exports = router;
