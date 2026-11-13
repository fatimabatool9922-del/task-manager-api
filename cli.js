
const taskTitle = process.argv.slice(2).join(" ")

if (!taskTitle) {
    console.log("Please provide a task title!");
} else {
    console.log("Your Task:", taskTitle);
}
