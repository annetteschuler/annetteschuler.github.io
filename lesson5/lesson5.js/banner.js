function banner () {
    var x = document.getElementById("bannerdiv");
    var weekday = new Array (7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var now = new Date();
    var day = weekday[now.getDay()];

    if (day == "Friday") {
        x.style.display = "block";  
    }  else {
       x.style.display = "none"; 
    }
}
