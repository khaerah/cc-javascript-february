function getFirstValue(array){
    return array[0];
    
}


// input
let number=[]; //empty array to store number
let userInput; //collect user input

while (true){
    userInput = prompt("This program collects numbers and returns the first number\n type in your numbers\n Type'stop' to exit");
    if (userInput== 'stop'){
        break;
    }

    userInput = Number (userInput);
    number.push(userInput);
}
    console.log(numbers);

// let message = ('the array of the number is' + getFirstValue(array));
alert (getFirstValue(number));

// console.log(getFirstValue([1,2,3]))
// console.log(getFirstValue([5,2,3]))
// console.log(getFirstValue([43,2,3]))
// console.log(getFirstValue([54,2,3]))
