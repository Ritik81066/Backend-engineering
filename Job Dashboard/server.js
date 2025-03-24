const express = require("express");
const app = express();
app.listen(2345,function(){
    console.log("server started at port number 2345");
})
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let users = []; 
app.get("/users", (req, res) => {
    res.json(users);
});
app.get("/",function(req,resp){
    let path=__dirname+"/index.html";
    resp.sendFile(path);
})
app.post("/signupkaro", (req, res) => {
    const { txtname, txtemail, txtpass } = req.body;
    if (!txtname || !txtemail || !txtpass) {
        return res.status(400).json({ error: "All fields are required" });
    }
    const newUser = { id: users.length + 1, txtname, txtemail, txtpass };
    users.push(newUser);
    res.json({ message: "User added successfully", user: newUser });
});
app.post("/update", (req, res) => {
    const { id, txtname, txtemail, txtpass } = req.body;
    let user = users.find(user => user.id == id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    user.txtname = txtname || user.txtname;
    user.txtemail = txtemail || user.txtemail;
    user.txtpass = txtpass || user.txtpass;
    res.json({ message: "User updated successfully", user });
});
app.post("/delete", (req, res) => {
    const { id } = req.body;
    const index = users.findIndex(user => user.id == id);
    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    users.splice(index, 1);
    res.json({ message: "User deleted successfully" });
});