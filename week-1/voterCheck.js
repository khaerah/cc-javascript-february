let userInput = prompt("Type in your age")
userInput = Number (userInput)

if (userInput < 18){
    message = "You are not eligible to vote";
}    

else {
   message = "you are eligible to vote";
}

alert(message)