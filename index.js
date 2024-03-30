// import inquirer from "inquirer";
// //Asking Questions from users through Inquirer
// // const  firstNumber: number = 0;
// // const  secondNumber: number = 0;
// async function main() {
//   let answers = await inquirer.prompt([
//     { message: "Enter Your First Number", type: Number, name: `firstNumber` },
//     {
//       message: " Enter Your Second Number",
//       type: Number,
//       name: `secondNumber`,
//     },
//     {
//       message: " Select One Operator To Perfome Operations",
//       type: "list",
//       name: "operator",
//       choices: ["Addition", "Substraction", "Multiplication", "Division"],
//     },
//   ]);
//   if (answers.operator === "Addition") {
//     let result = answers.firstNumber + answers.secondNumber;
//     console.log(result);
//   } else if (answers.operator === "Substraction") {
//     console.log(answers.firstNumber - answers.secondNumber);
//   } else if (answers.operator === "Multiplication") {
//     console.log(answers.firstNumber * answers.secondNumber);
//   } else if (answers.operator === "Division") {
//     console.log(answers.firstNumber / answers.secondNumber);
//   } else {
//     console.log("Ïnvalid Input");
//   }
// }
// //Conditional Statements if els
// main();
import inquirer from "inquirer";
async function main() {
    let answers = await inquirer.prompt([
        { message: "Enter Your First Number", type: "number", name: "firstNumber" },
        { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
        {
            message: "Select One Operator To Perform Operations",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        }
    ]);
    // Conditional Statements
    if (answers.operator === "Addition") {
        let result = answers.firstNumber + answers.secondNumber;
        console.log("Result of Addition:", result);
    }
    else if (answers.operator === "Subtraction") {
        let result = answers.firstNumber - answers.secondNumber;
        console.log("Result of Subtraction:", result);
    }
    else if (answers.operator === "Multiplication") {
        let result = answers.firstNumber * answers.secondNumber;
        console.log("Result of Multiplication:", result);
    }
    else if (answers.operator === "Division") {
        if (answers.secondNumber !== 0) {
            let result = answers.firstNumber / answers.secondNumber;
            console.log("Result of Division:", result);
        }
        else {
            console.log("Cannot divide by zero.");
        }
    }
    else {
        console.log("Invalid Input");
    }
}
main();
