
const express = require("express");

const app = express();

app.use(express.json());

// In-memory array
let tasks = [
    { id: 1, title: "Learn Node.js" },
    { id: 2, title: "Complete Assignment" }
];

// Generate IDs
let nextId = 3;


// 1. GET all tasks
app.get("/api/v1/tasks", (req, res) => {

    res.status(200).json({
        success: true,
        data: tasks
    });

});


// 2. GET single task by ID
app.get("/api/v1/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });

});


// 3. POST create new task
app.post("/api/v1/tasks", (req, res) => {

    const { title } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({
            success: false,
            message: "Task title is required"
        });
    }

    const newTask = {
        id: nextId++,
        title: title.trim()
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: newTask
    });

});


// 4. PUT update task
app.put("/api/v1/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const { title } = req.body;

    if (!title || !title.trim()) {
        return res.status(400).json({
            success: false,
            message: "Valid task title is required"
        });
    }

    task.title = title.trim();

    res.status(200).json({
        success: true,
        message: "Task updated successfully",
        data: task
    });

});


// 5. DELETE task
app.delete("/api/v1/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        data: deletedTask[0]
    });

});


// Start server
app.listen(3000, () => {
    console.log("Express API running on port 3000");
});
