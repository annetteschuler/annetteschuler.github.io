// day names array
 const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// long month names array
 const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
 // hours 0-23
 const hours = [
    "0", 
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
     "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
     "21", "22", "23"
 ];

 const minutes = [
    "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23" "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59"
  ];
 
  const seconds = [
    "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", 
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23" "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59"
 ]; 

    const todaysdate = new Date();
    const dayName = dayNames[todaysdate.getDay()];
    const monthName = months[todaysdate.getMonth()];
    const hours = hours[date.getHours()]; 
    const minute = minutes[date.getMinutes()];
    const seconds = seconds[date.getSeconds()];
    const currentdate = dayName + ", " + monthName + " " + todaysdate.getDate() + ", " + todaysdate.getFullYear() + " at " + hours + ":" minutes +":" seconds;

    document.getElementById('currentdate').textContent = currentdate;