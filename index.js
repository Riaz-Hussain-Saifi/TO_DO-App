// Importing inquirer module for command-line user interface
import inquirer from "inquirer";
// Array to store tasks
let app = [];
// Async function to use 'await' inside the while loop
(async () => {
    while (true) {
        // Prompting user for input
        let answers = await inquirer.prompt([
            {
                type: "list",
                name: "to_do",
                message: "What do you want to do in this App?",
                choices: ["Add", "Delete", "List", "Exit"],
            },
        ]);
        if (answers.to_do === "Add") {
            // Adding a task to the array
            let addTaskAnswer = await inquirer.prompt([
                {
                    name: "task",
                    message: "Enter the task to add: ",
                },
            ]);
            let addTask = addTaskAnswer.task;
            app.push(addTask);
            console.log(`Task "${addTask}" added successfully.`);
        }
        else if (answers.to_do === "List") {
            // Listing all tasks
            console.log("Here is the list of tasks:");
            app.forEach((task, index) => console.log(`${index + 1}. ${task}`));
        }
        else if (answers.to_do === "Delete") {
            // Deleting a task
            let indexAnswer = await inquirer.prompt([
                {
                    name: "index",
                    type: "number",
                    message: "Enter the index of the task to delete: ",
                },
            ]);
            let indexToDelete = indexAnswer.index - 1; // Adjusting index to 0-based
            if (indexToDelete >= 0 && indexToDelete < app.length) {
                let deletedTask = app.splice(indexToDelete, 1)[0]; // Removing task from array
                console.log(`Task "${deletedTask}" deleted successfully.`);
            }
            else {
                console.log("Invalid index. No task deleted.");
            }
        }
        else if (answers.to_do === "Exit") {
            // Exiting the application
            console.log(`Thank you for using To-Do application.`);
            break;
        }
    }
})();
