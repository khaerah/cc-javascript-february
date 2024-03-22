// save API url in a variable
let url = 'https://www.boredapi.com/api/activity';

// write ab asynchronous function to  get a response
async function activity (){
    let response = await fetch (url);
    let activityObject = await response.json();

    //Save HTML element into variable
    let activityElement = document.getElementById('display'); 

    // Extract the information fromjson and write it to HTMl
    activityElement.innerHTML = activityObject.activity
};

activity();