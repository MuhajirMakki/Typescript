import inquirer from "inquirer";

const option = await inquirer.prompt([
    {
        message: "Would you like to know about User",
        type: "list",
        name: "decision",
        choices: ["yes", "no"]
    }
]);

if (option.decision === "yes") {
    const answer = await inquirer.prompt([
        {
            message: "What is your Name",
            type: "input",
            name: "name"
        },
        {
            message: "What is your Age",
            type: "number",
            name: "age"
        },
        {
            message: "What is your gender",
            type: "list",
            name: "gender",
            choices: ["Male", "Female"]
        },
        {
            message: "Enter First Number",
            name: "Firstnumber",
            type: "number"
        },
        {
            message: "Enter second Number",
            type: "number",
            name: "Secondnumber"
        },
        {
            message: "Select one of the operator to perform action",
            type: "list",
            name: "operator",
            choices: ["addition", "subtraction", "Multiplication", "Division"]
        }
    ]);

    console.log("The answer according to your chosen operator:");

    if (answer.operator === "addition") {
        console.log(answer.Firstnumber + answer.Secondnumber);
    } else if (answer.operator === "subtraction") {
        console.log(answer.Firstnumber - answer.Secondnumber);
    } else if (answer.operator === "Multiplication") {
        console.log(answer.Firstnumber * answer.Secondnumber);
    } else if (answer.operator === "Division") {
        console.log(answer.Firstnumber / answer.Secondnumber);
    } else {
        console.log("Please select a valid operator");
    }

    console.log("User detail is:\n", answer.name, 'is', answer.age, 'years old, gender is:', answer.gender);
} else if (option.decision === "no") {
    const calcul = await inquirer.prompt([
        {
            message: "Enter First Number",
            name: "Firstnumber",
            type: "number"
        },
        {
            message: "Enter second Number",
            type: "number",
            name: "Secondnumber"
        },
        {
            message: "Select one of the operator to perform action",
            type: "list",
            name: "operator",
            choices: ["addition", "subtraction", "Multiplication", "Division"]
        }
    ]);

    console.log("The answer according to your chosen operator:");

    if (calcul.operator === "addition") {
        console.log(calcul.Firstnumber + calcul.Secondnumber);
    } else if (calcul.operator === "subtraction") {
        console.log(calcul.Firstnumber - calcul.Secondnumber);
    } else if (calcul.operator === "Multiplication") {
        console.log(calcul.Firstnumber * calcul.Secondnumber);
    } else if (calcul.operator === "Division") {
        console.log(calcul.Firstnumber / calcul.Secondnumber);
    } else {
        console.log("Please select a valid operator");
    }
}
