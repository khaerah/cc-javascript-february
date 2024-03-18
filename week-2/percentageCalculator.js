/*
algorithm of the problem
take input from user:to integers
Calculate the percentage using using a fraction
output the result in the alert box
*/

// input section
let userInput = prompt("input a number")
userInput =Number(userInput)
let userInput2 = prompt("input a second number")
userInput =Number(userInput)

// processing section
function percentage(userInput, userInput2){
    let answer =(userInput/userInput2)*100
    return answer;
}

// ouput section
alert(percentage(userInput, userInput2) + "%");



