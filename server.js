const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
    {
        id: 1,
        title: "Learn Docker",
        completed: false
    },
    {
        id: 2,
        title: "Build Node.js Docker project",
        completed: false
    }
];

// Home
app.get("/", (req, res) => {
    res.json({
        message: "Node.js Docker Task Manager API",
        status: "running"
    });
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Get task by ID
app.get("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    res.json(task);
});

// Create task
app.post("/tasks", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            error: "Task title is required"
        });
    }

    const newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const taskExists = tasks.some(task => task.id === id);

    if (!taskExists) {
        return res.status(404).json({
            error: "Task not found"
        });
    }

    tasks = tasks.filter(task => task.id !== id);

    res.json({
        message: "Task deleted successfully"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
