function banner () {
    var weekday = new Array (7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var day = weekday[now.getDay()];

    if (day == "Friday") {
        document.writeIn("<h2>Banner</h2>");
    }
    else (hide);
  }

 //use display: none if not on Friday 
}