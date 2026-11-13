
# Task Manager API

## Project Description
A simple Task Manager API built using Node.js
and Express.js.

Tasks are stored in a JavaScript array.
No database is used.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Core HTTP Module

## Installation

1. Install Node.js.
2. Open the project folder in VS Code.
3. Run npm install.

## Running the Project

### Part A - CLI
node cli.js Complete Assignment

### Part B - Core HTTP Server
node server.js

### Part C - Express API
node app.js

## API Base URL
http://localhost:3000/api/v1/tasks

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/v1/tasks | Get all tasks |
| GET | /api/v1/tasks/:id | Get single task |
| POST | /api/v1/tasks | Create new task |
| PUT | /api/v1/tasks/:id | Update task |
| DELETE | /api/v1/tasks/:id | Delete task |

## Status Codes

- 200: OK
- 201: Created
- 400: Bad Request
- 404: Not Found

## Data Storage

All tasks are stored in an in-memory
JavaScript array.

Data resets when the server restarts.
