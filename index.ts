import inquirer from "inquirer";

//Asking Questions from users through Inquirer
// const  firstNumber: number = 0;
// const  secondNumber: number = 0;
let answers = await inquirer.prompt([
    {message: "Enter Your First Number", type: Number, name: `firstNumber`},
    {message: " Enter Your Second Number", type: Number, name: `secondNumber`},
    {
        message: " Select One Operator To Perfome Operations",
        type: "list", 
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    }

])

//Conditional Statements if els 

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Substraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}

else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}

else {
    console.log("Ïnvalid Input")
}







