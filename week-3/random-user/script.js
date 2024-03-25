let url = 'https://randomuser.me/api/';

async function results() {
    let response = await fetch(url);
    let resultObject = await response.json();
    // console.log(resultObject.results);


    let resultElement = document.getElementById('random');
    resultObject.results[0].name.title
    resultObject.results[0].name.first
    resultObject.results[0].name.last
    console.log(resultObject[0],name.search(inputEx))

    // console.log(resultObject.results);


    let userinput = '';
    let form = document.getElementById('gender');
    location.addEvebtListner('click', () => {
    userinput += form.element[0].value;

        let inputEx = new RegExp (userinput, 'i');
    })


    // resultElement.innerHTML = resultObject.results
};
results();

