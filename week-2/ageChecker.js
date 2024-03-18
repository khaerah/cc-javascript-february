/*
this program chcks the category of the user's age.
takes input from user :username
take input from user: age
check the age by category
display a message with the username abd their age category
*/

// input setion
let candidateName = prompt("this program classifies you by the age category\ntype in your name")
let candidateAge = prompt("type in your age:")
candidateAge =Number(candidateAge);

// processing 
 let message;

if (candidateAge < 13){
    message = candidateAge + ", you are an adolescent."
} else if (candidateAge < 18){
    message = candidateAge + ", you are an adolescent."
}else {
    message = candidateName + " you are an adult."
}

