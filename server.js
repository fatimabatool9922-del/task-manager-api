
const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    // Route 1: Home
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;

        res.end(JSON.stringify({
            message: "Welcome to Task Manager API"
        }));
    }

    // Route 2: Get all tasks
    else if (req.url === "/tasks" && req.method === "GET") {
        res.statusCode = 200;

        res.end(JSON.stringify([
            { id: 1, title: "Learn Node.js" },
            { id: 2, title: "Complete Assignment" }
        ]));
    }

    // Route 3: About
    else if (req.url === "/about" && req.method === "GET") {
        res.statusCode = 200;

        res.end(JSON.stringify({
            message: "This is a Task Manager Server"
        }));
    }

    // Route not found
    else {
        res.statusCode = 404;

        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
