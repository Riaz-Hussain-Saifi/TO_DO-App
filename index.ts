#!/usr/bin/env node

// Importing required modules
import inquirer from "inquirer";
import chalk from "chalk";

// Array to store tasks
let app: string[] = [];

// Welcome message
console.log(
  chalk.cyanBright.blueBright(
    `\n\t Welcome to TO-DO app - Code with Saifi Developer`
  )
);
console.log(chalk.yellowBright("*".repeat(66)));
console.log(`\n`);

// Async function to use 'await' inside the while loop
const main = async () => {
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
      app.push(chalk.cyanBright(addTask));
      console.log(
        chalk.greenBright(
          `\n Task "${chalk.cyanBright(addTask)}" added successfully.\n`
        )
      );
    } else if (answers.to_do === "List") {
      // Listing all tasks if available
      if (app.length === 0) {
        console.log(
          chalk.redBright(
            "\n No tasks added yet, please add task in the list \n"
          )
        );
      } else {
        console.log(chalk.greenBright("\n Here is the list of tasks: "));
        app.forEach((task, index) =>
          console.log(chalk.bold.cyanBright(`${index + 1}. ${task} \n`))
        );
      }
    } else if (answers.to_do === "Delete") {
      // Deleting a task if tasks are available
      if (app.length === 0) {
        console.log(
          chalk.redBright(
            "\n No tasks added yet, there is nothing to delete.\n"
          )
        );
      } else {
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
          console.log(
            chalk.greenBright(`\n Task ${deletedTask} deleted successfully.\n`)
          );
        } else {
          console.log(chalk.redBright("\t Invalid index. No task deleted. \n"));
        }
      }
    } else if (answers.to_do === "Exit") {
      // Exiting the application
      console.log(
        chalk.yellowBright(`\n\t Thank you for using To-Do application.\n`)
      );
      break;
    }
  }
};

// Calling main function
main();
