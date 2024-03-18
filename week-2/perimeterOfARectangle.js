function perimerterOfARectangle(length, width){
    return (length + width) * 2;
}

let length = prompt('this program finds the perimeter of a rectangle\n Type in the length');
length = Number(length)

let width = prompt(' Type in the width');
width = Number(width)

let message = "The perimeter of rectangle is" +  perimerterOfARectangle(length, width);
alert(message); 