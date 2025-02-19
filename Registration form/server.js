let express=require('express');
let app=express();
app.listen(2345,function(){
    console.log("server started at 2345");
})
app.use(express.urlencoded("true"));
app.get("/",function(req,resp){
    let path=__dirname+"/index.html";
    resp.sendFile(path);
})
app.post