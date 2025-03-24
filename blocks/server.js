const mongoose=require("mongoose");
let blogSchema=new mongoose.Schema({
    title:String,
    author:{
        type:String,
        require:true
    },
    content:String,
    date:{ 
        type:Date,
        default:Date.now()
    }
})
mongoose.model("Blogs",blogSchema)