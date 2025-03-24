const express = require("express");
const path = require("path");

const app = express();
const PORT = 2345;

let tasks = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server started at port number ${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json({ tasks });
});

// Add a new task
app.post("/addTask", (req, res) => {
    let task = req.body.task;
    if (task) {
        tasks.push(task);
        res.json({ message: "Task added successfully!", tasks });
    } else {
        res.status(400).json({ error: "Task is required!" });
    }
});

// Delete a task
app.post("/deleteTask", (req, res) => {
    let task = req.body.task;
    let index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        res.json({ message: "Task deleted successfully!", tasks });
    } else {
        res.status(404).json({ error: "Task not found!" });
    }
});

// Update a task
app.post("/updateTask", (req, res) => {
    let { oldTask, newTask } = req.body;
    let index = tasks.indexOf(oldTask);
    if (index !== -1 && newTask) {
        tasks[index] = newTask;
        res.json({ message: "Task updated successfully!", tasks });
    } else {
        res.status(404).json({ error: "Task not found or invalid new task!" });
    }
});