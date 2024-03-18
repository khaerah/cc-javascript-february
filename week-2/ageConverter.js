function ageConverter(year){
    return year * 365;
}

let userage =prompt ("this program converts your age to days.\nType in your age:");
userage =Number(userage);

let message =userage + "year is" + ageConverter(userage) + "days.";
alert(message); 