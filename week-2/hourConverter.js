function hourConverter(year){
    return hour * 3600;
}

let userage =prompt ("this program converts hour to seconds.");
userage =Number(userage);

let message =userage + "year is" + ageConverter(userage) + "days.";
alert(message);