function areaOfATriangle(base, height){
    return  (base * height) / 2;
}

let base = prompt("This program finds the area of a triangle\n type in the base");
base = Number(base);

let height = prompt("Type in the height");
height = Number(height);

let message = "The area of the triangle is" + areaOfATriangle(base,height) ;
alert(message);



