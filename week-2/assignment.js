let userInput = prompt("type your name");
let house =prompt("type your house number");
house =Number(house)


let message;
if (house == 1){
    message = userInput  + ", you are in red house."
}  
else if (house == 2){
    message = userInput + ", you are in green house."
} 
if (house == 3){
    message = userInput + " you are in blue house."
}
 else if (house == 4){
    message = userInput + " you are in yellow house."
}

alert( message)