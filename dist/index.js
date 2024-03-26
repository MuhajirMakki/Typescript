import inquirer from "inquirer";
// [] array, {} obj
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "FirstNumber" },
    { message: "Enter second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "Multiplication", "Division"],
    },
]);
// //////////////////////////////////////////////////////////////////////////////////////
// if (answer.operator === "addition") {
//     console.log("your value is " + answer.FirstNumber + answer.SecondNumber);
// }
// OUTPUT>> it give answer of 1020 because when you add any number with string its just concatenate it
// hence we just pass numeric values as to get operation done
// ////////////////////////////////////////////////////////////////////////////////////
if (answer.operator === "addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("please select valid operator");
}
// 
