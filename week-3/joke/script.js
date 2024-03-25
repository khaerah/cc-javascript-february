let url = 'https://official-joke-api.appspot.com/random_joke'

async function setup(){

    let response = await fetch(url);
    let jokeObject = await response.json();
    

    let jokeElement = document.getElementById('funny');

    jokeElement.innerHTML = jokeObject.setup

};

setup();

async function punchline(){ 
    let response = await fetch(url);
    let jokeObject = await response.json();
    
    let jokeElement = document.getElementById('punch-line');

    jokeElement.innerHTML = jokeObject.punchline;

};
punchline();