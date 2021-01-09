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
    const todaysdate = new Date();
    const dayName = dayNames[todaysdate.getDay()];
    const monthName = months[todaysdate.getMonth()];
    const hours = hours[getHours()]; 
    const minute = minutes[getMinutes()];
    const seconds = seconds[getSeconds()];
    const currentdate = dayName + ", " + monthName + " " + todaysdate.getDate() + ", " + todaysdate.getFullYear() + " at " + hours + ":" minutes +":" seconds;

    document.getElementById('currentdate').textContent = currentdate;