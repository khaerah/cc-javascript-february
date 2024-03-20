// function sayHello(){
//     return console.log('hello')
// }

// setInterval(sayHello, 1000);

const myNumbers =[4, 1, -20, -7, 5, 9, -6]

document.getElementById('initial').innerHTML += myNumbers

function removeNegative(numbers, callBack){
    const myArray =[];
    for (const x of numbers) {
        if (callBack(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

const positiveNumbners = removeNegative(myNumbers, (x) => x >=0);

document.getElementById('callback').innerHTML += positiveNumbners;

