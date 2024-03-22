(async () => {
    // get informatrion from uni api
    let url = "http://universities.hipolabs.com/search?country=Nigeria"
    let response = await fetch(url);
    let uniList = await response.json();
    // console.log(uniList)

    // target corresponding HTML elements
    let cardBox = document.getElementById('card');
    let schoolName = cardBox.children[0];
    let officialSite = cardBox.children[1];
    let userinput = document.forms['schoolSearch']
    let button = document.getElementById('button')

    // add api information to HTML elements
    let index =7;
    schoolName.innerHTML += " " + uniList[index].name;
    let hyperlink = officialSite.children[0];
    hyperlink.setAttribute("href",`${"https://" + uniList[index].domain[0]}`);
    hyperlink.innerHTML = uniList[7].domain[0]
})()



